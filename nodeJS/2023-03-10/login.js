import chalk from 'chalk';
import { faker } from '@faker-js/faker';
import fs from 'node:fs/promises';
import readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const rl = readline.createInterface({ input, output });

const user     = await rl.question('Vartotojas:');
const pass     = await rl.question('Slaptažodis:');

if(user === 'admin' && pass === '1234') {

const name = faker.name.firstName()
const surname = faker.name.lastName()
const password =  faker.internet.password()
const email = faker.internet.email()
const birthdate = faker.date.birthdate()

await fs.writeFile("people.txt", `${name}\t${surname}\t${password}\t${email}\t${birthdate.toLocaleDateString('lt-LT')}\n`)

} else {
    console.log('Neteisingi prisijungimo duomenys')
}


/*if (user != "User" || pass != "1234") {
  console.log("Prisijungimo duomenys neteisingi")
} else {
    console.log("Viskas gerai") }*/