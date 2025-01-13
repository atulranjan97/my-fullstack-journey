function getRandomChoice() {
    let randomChoice = Math.floor(Math.random() * 3 + 1);
    // - Math.random(): Generates a number between 0 (inclusive) and 1 (exclusive)
    // - Multiply by 3: Scales it to 0 (inclusive) to 3 (exclusive)
    // - Add 1: Shifts the range to 1, 2, or 3
    // - Math.floor(): Rounds down to nearest integer (0, 1, or 2)
        //Math.floor(2.98) becomes 2, because Math.floor rounds it down.

    // Math.floor(2.98) → 2
    // Math.round(2.98) → 3

    return randomChoice;
    // the `randomChoice` variable inside this function will be destroyed the moment execution of this function completes. 
}
// generate a random number between 1, 2 and 3, then return it from where it being called.

function getComputerChoice() {
    let randomChoice = getRandomChoice();
    let computerChoice;

    if(randomChoice === 1) {
        computerChoice = `👊 Rock`;
    } else if (randomChoice === 2) {
        computerChoice = `✋ Paper`;
    } else {
        computerChoice = `✌️ Scissors`;
    }

    return computerChoice;
}
// random number ko choice ke sath map kar rahein hai
/* map random number with specific choice (ie. 1 with `👊 Rock`, 2 with `✋ Paper`, 3 with `✌️ Scissors`) and then assign that choice in a variable named `computerChoice`, and now this variable represents computer choice.
*/

function getResult(userChoice, computerChoice) {
    let result;
    if (userChoice === computerChoice) {
        result = 'Tie';
    } else if ((userChoice === '👊 Rock' && computerChoice === '✌️ Scissors') || (userChoice === '✋ Paper' && computerChoice === '👊 Rock') || (userChoice === '✌️ Scissors' && computerChoice === '✋ Paper')) {
        result = 'You Won!';
    } else {
        result = 'Computer Won!';
    }

    return result;
}

function updateResult(userChoice, computerChoice, result) {
    document.querySelector('#result').innerHTML = 
    `You chose ${userChoice} <br>
    Computer chose ${computerChoice} <br>
    Result: ${result}`;    
}

function rockClicked() {
    let userChoice = '👊 Rock';
    let computerChoice = getComputerChoice();
    let result = getResult(userChoice, computerChoice);
    updateResult(userChoice, computerChoice, result);
}


function paperClicked() {
    let userChoice = '✋ Paper';
    let computerChoice = getComputerChoice();
    let result = getResult(userChoice, computerChoice);
    updateResult(userChoice, computerChoice, result);  
}


function scissorClicked() {
    let userChoice = '✌️ Scissors';
    let computerChoice = getComputerChoice();
    let result = getResult(userChoice, computerChoice);
    updateResult(userChoice, computerChoice, result);  
}