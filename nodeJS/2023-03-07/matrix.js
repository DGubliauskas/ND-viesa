import chalk from 'chalk';

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let x = process.stdout.columns;
let y = process.stdout.rows;
console.log(x);
let letters = "abcdefghijklmnoprstuvxyzABCDEFGHIJKLMNOPRSTUVXYZ123456789"
let xPosition = ""
let randLetter = ""

setInterval(() => {
    xPosition = rand(1, x)}, 120);
    

setInterval(() => {
        randLetter = letters[rand (0, letters.length - 1)]
        console.log(chalk.green(randLetter.padStart(xPosition)))}, 20)
