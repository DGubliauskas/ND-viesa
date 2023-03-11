import chalk from 'chalk';

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let xCol = process.stdout.columns;
let yRow = process.stdout.rows;

let letters = "abcdefghijklmnoprstuvxyzABCDEFGHIJKLMNOPRSTUVXYZ123456789!@#$%^&*()+={[}]|,.                                      "
let xPosition = 1
let randLetter = ""
let randChance = ""
generator()
      
function generator() {
        for(let i = 0; i < xCol; i++) {
           randChance += rand(0, 9)
        }}

setInterval(() => {
    for (let i=0; i<xCol; i++) {
    if (randChance[i] <= 1) {
        randLetter += letters[(rand(1, letters.length-1))]
    } else {
        randLetter += " "
    }}
        console.log(chalk.green(randLetter))}, 250)

setInterval(() => {
    randChance = ""
                 for(let i = 0; i < xCol; i++) {
                    randChance += rand(0, 9)
                 }}, 1250) 
