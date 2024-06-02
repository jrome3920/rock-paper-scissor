const scores = {
    player: 0,
    computer: 0
}

function resetScores() {
    scores.player = scores.computer = 0;
}

function getComputerChoice() {
    var choice = Math.floor(Math.random() * 3) + 1;
    return choice;
}

function resetWeaponColors() {
    setResultColor('', '');
}

function getWeapon(playerChoice, computerChoice) {
    let array = [playerChoice, computerChoice];
    for (let index = 0; index < array.length; index++) {
        switch (array[index]) {
            case 1:
                array[index] = 'rock';
                break;
            case 2:
                array[index] = 'paper';
                break;
            case 3:
                array[index] = 'scissor';
                break;
            default:
                array[index] = 'invalid';
                break;
        };
    };

    return array;
}

function getCurrentScore() {
    document.getElementById('player-score').innerHTML = 'Player: ' + scores.player
    document.getElementById('computer-score').innerHTML = 'Computer: ' + scores.computer
}

function setResultColor(result, weaponNumbers) {
    const player = document.getElementById("player_weapon-" + weaponNumbers[0]);
    const computer = document.getElementById("computer_weapon-" + weaponNumbers[1]);
    
    function setColor(color) {
        player.style.backgroundColor = color[0];
        computer.style.backgroundColor = color[1];
    }

    switch (result) {
        case "win":
            setColor(['green', 'red'])
            break;
        case "lose":
            setColor(['red', 'green'])
            break;
        case "draw":
            setColor(['orange', 'orange'])
            break;
        default:
            var weapons = document.getElementsByClassName("weapon");
            for (var i = 0; i < weapons.length; i++) {
                weapons[i].style.backgroundColor = "#7077A1";
            }
            break;
    }
}

function compareResult(weapons, weaponNumbers) {
    const outcomes = {
        rock: 'scissor',
        scissor: 'paper',
        paper: 'rock'
    };
    console.log(weapons, weaponNumbers)
    if (weapons[0] === weapons[1]) {
        console.log(document.getElementById('result').innerHTML = 'Draw!');
        document.getElementById('result-description').innerHTML = 'It\'s a draw because both players chose the same weapon.';
        setResultColor('draw', weaponNumbers);
    } else {
        console.log(outcomes[weapons[0]] === weapons[1] ?
            (document.getElementById('result-description').innerHTML = 'You win because ' + weapons[0] + ' beats ' + weapons[1] + '.'
                , setResultColor('win', weaponNumbers)
                , scores.player++, document.getElementById('result').innerHTML = 'You Win!')
            : (document.getElementById('result-description').innerHTML = 'Computer wins because ' + weapons[1] + ' beats ' + weapons[0] + '.'
                , setResultColor('lose', weaponNumbers)
                , scores.computer++, document.getElementById('result').innerHTML = 'Computer Wins!'));
    }
}

function playRound(playerWeaponNumber) {
    resetWeaponColors();
    const computerWeaponNumber = getComputerChoice();
    const weaponNumbers = [playerWeaponNumber, computerWeaponNumber];
    compareResult(getWeapon(playerWeaponNumber, computerWeaponNumber), weaponNumbers);
    getCurrentScore();
    if (scores.player === 5 || scores.computer === 5) {
        console.log(document.getElementById('final-score').innerHTML
            = scores.player === 5 ? 'You Win!' : 'Computer Wins...');
        document.getElementById('player-final_score').innerHTML = scores.player
        document.getElementById('computer-final_score').innerHTML = scores.computer
        document.getElementById('modal-overlay').style.display = 'block'
    }
}

function showGame() {
    const overlay = document.getElementById('game-overlay');
    overlay.style.display = 'block';
    overlay.addEventListener('click', (event) => {
        if (event.target === overlay) {
            overlay.style.display = 'none';
        }
    });
}

function playAgain() {
    resetScores();
    resetWeaponColors();
    getCurrentScore();
    document.getElementById('modal-overlay').style.display = 'none';
    document.getElementById('result').innerHTML = 'Choose your weapon';
    document.getElementById('result-description').innerHTML = 'First to score 5 points wins the game';
}
