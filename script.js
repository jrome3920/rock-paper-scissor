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

function compareResult(weapons) {
    const outcomes = {
        rock: 'scissors',
        scissors: 'paper',
        paper: 'rock'
    };

    if (weapons[0] === weapons[1]) {
        return "draw";
    } else {
        console.log(weapons)
        return outcomes[weapons[0]] === weapons[1] ?
            (scores.human++, document.getElementById('result').innerHTML = 'Human Wins!')
            : (scores.computer++, document.getElementById('result').innerHTML = 'Computer Wins!');
    }
}

function playRound(selected) {
    console.log(
        compareResult(getWeapon(selected, getComputerChoice())),
        document.getElementById('human-score').innerHTML = scores.human,
        document.getElementById('computer-score').innerHTML = scores.computer
    );

    if (scores.human === 5 || scores.computer === 5) {
        console.log(document.getElementById('final-result').innerHTML
            = scores.human === 5 ? 'You Win!' : 'Computer Wins...');
        resetScores();
    }
}
