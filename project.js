// Deposit some money
// Determine number of lines to bet on
// Collect a bet amount
// Spin the slot machine
// Check if the player won
// Give the player their winnings
// Play again? how many times?

// Use node file.js to run the file

const prompt = require("prompt-sync")();

const ROWS = 3;
const COLUMNS = 3;

const SYMBOLS_COUNT = {
    "🍒": 2,
    "🍊": 4,
    "🍇": 6,
    "🍓": 8,
    "🍍": 10,
    "🍉": 12
};

const SYMBOLS_VALUES = {
    "🍒": 15,
    "🍊": 9,
    "🍇": 6,
    "🍓": 4,
    "🍍": 3,
    "🍉": 1
};

const deposit = () => {
    while(true) {
        const depositAmount = prompt("Enter the amount you want to deposit: ");
        const numberDepositAmount = parseFloat(depositAmount);

        if (isNaN(numberDepositAmount) || numberDepositAmount <= 0) {
            console.log("Invalid amount, please try again.");
        } else {
            return numberDepositAmount;
        }
    }
};

const getNumberOfLines = () => {
    while(true) {
        const lines = prompt("Enter the number of lines you want to bet on (max 3): ");
        const numberOfLines = parseFloat(lines);

        if (isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > 3) {
            console.log("Invalid number of lines, please try again.");
        } else {
            return numberOfLines;
        }
    }
};

const getBet = (balance, lines) => {
    while(true) {
        const bet = prompt("Enter the bet per line: ");
        const numberBet = parseFloat(bet);

        if (isNaN(numberBet) || numberBet <= 0 || numberBet > balance/lines) {
            console.log("Invalid bet, please try again.");
        } else {
            return numberBet;
        }
    }
};

const spinTheSlotMachine = () => {
    const symbols = [];
    for(const [symbol, count] of Object.entries(SYMBOLS_COUNT)) {
        for(let i = 0; i < count; i++) {
            symbols.push(symbol);
        }
    }
    
    const slotMachine = [];
    for(let i = 0; i < COLUMNS; i++) {
        slotMachine.push([]);
        const reelSymbols = [...symbols];
        for(let j = 0; j < ROWS; j++) {
            const randomIndex = Math.floor(Math.random() * reelSymbols.length);
            const selectedSymbol = reelSymbols[randomIndex];
            slotMachine[i].push(selectedSymbol);
            reelSymbols.splice(randomIndex, 1);
        }
    }

    return slotMachine;
};

const transpose = (reels) => {
    const rows = [];

    for(let i = 0; i < ROWS; i++) {
        rows.push([]);
        for(let j = 0; j < COLUMNS; j++) {
            rows[i].push(reels[j][i]);
        }
    }
    return rows;
};

const printSlotMachine = (rows) => {
    for (const row of rows) {
        let rowString = "";
        for(const [i, symbol] of row.entries()){
            rowString += symbol;
            if(i !== row.length - 1) {
                rowString += " | ";
            }
        }
        console.log(rowString);
    }
}

const getWinnings = (rows, bet, lines) => {

}

let balance = deposit();
const numberOfLines = getNumberOfLines();
const bet = getBet(balance);
const reels = spinTheSlotMachine();
const rows = transpose(reels);
printSlotMachine(rows);
getWinnings(rows, bet, numberOfLines);
