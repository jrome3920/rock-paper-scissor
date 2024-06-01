const scores = {
    human: 0,
    computer: 0
}

function resetScores() {
    scores.human = scores.computer = 0;
}

function getComputerChoice() {
    var choice = Math.floor(Math.random() * 3) + 1;
    return choice;
}

function resetWeaponColors() {
    setResultColor('', '');
}

function getWeapon(humanChoice, computerChoice) {
    let array = [humanChoice, computerChoice];
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
    document.getElementById('human-score').innerHTML = 'Player: ' + scores.human
    document.getElementById('computer-score').innerHTML = 'Computer: ' + scores.computer
}

function setResultColor(result, weaponNumbers) {
    const player = document.getElementById("player_weapon-" + weaponNumbers[0]);
    const computer = document.getElementById("computer_weapon-" + weaponNumbers[0]);

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
        rock: 'scissors',
        scissors: 'paper',
        paper: 'rock'
    };
    console.log(weapons, weaponNumbers)
    if (weapons[0] === weapons[1]) {
        console.log(document.getElementById('result').innerHTML = 'Draw!');
        document.getElementById('result-description').innerHTML = 'It\'s a draw because both players chose the same weapon.';
        setResultColor('draw', weaponNumbers);
    } else {
        console.log(outcomes[weapons[0]] === weapons[1] ?
            (document.getElementById('result-description').innerHTML = 'Human wins because ' + weapons[0] + ' beats ' + weapons[1] + '.'
                , setResultColor('win', weaponNumbers)
                , scores.human++, document.getElementById('result').innerHTML = 'Human Wins!')
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
    if (scores.human === 5 || scores.computer === 5) {
        console.log(document.getElementById('final-score').innerHTML
            = scores.human === 5 ? 'You Win!' : 'Computer Wins...');
        document.getElementById('human-final_score').innerHTML = scores.human
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

function getHeader() {
    var source = document.getElementById("navbar-template").innerHTML;
    var template = Handlebars.compile(source);
    var html = template();
    document.getElementById("navbar-container").innerHTML = html;
}

window.addEventListener('scroll', function () {
    var footer = document.getElementById('footer');
    var scrollPosition = window.scrollY;
    var windowHeight = window.innerHeight;
    var bodyHeight = document.body.offsetHeight;

    // Check if scrolled to the bottom of the page
    if (scrollPosition + windowHeight >= bodyHeight) {
        footer.style.display = 'block';
    } else {
        footer.style.display = 'none';
    }
});
