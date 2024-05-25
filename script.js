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
        return outcomes[weapons[0]] === weapons[1] ? (scores.human++, 'Human wins!')
            : (scores.computer++, 'Computer wins!');
    }
}

function playRound(selected) {
    console.log(compareResult(getWeapon(selected, getComputerChoice())));
    console.log(scores);

    if (scores.human === 5 || scores.computer === 5) {
        console.log(`${scores.human === 5 ? 'Human' : 'Computer'} wins!`);
        resetScores();
    }
}
