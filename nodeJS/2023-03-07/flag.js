import chalk from 'chalk';

let columns = process.stdout.columns;
let rows = Math.round(process.stdout.rows * 0.33);
let starRows = ""
let starColumns = ""

for(let i=1; i<=columns; i++) {
    starRows += "*"
}

for(let i=1; i<=rows; i++) {
    starColumns += starRows
}

console.log(chalk.yellow(starColumns) + chalk.green(starColumns) + chalk.red(starColumns));
