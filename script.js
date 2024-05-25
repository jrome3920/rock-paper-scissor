function getComputerChoice() {
    var choice = Math.floor(Math.random() * 3) + 1;
    return choice;
}

function getWeapon(humanChoice, computerChoice) {
    let array = [humanChoice, computerChoice]
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
        }
    }

    return array;
}

function compareResult(weapons) {
    
}

function playRound(selected) {
    compareResult(getWeapon(selected, getComputerChoice()));
}
