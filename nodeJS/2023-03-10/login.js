import chalk from 'chalk';
import { faker } from '@faker-js/faker';
import fs from 'node:fs/promises';
import readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const rl = readline.createInterface({ input, output });


const generator = {
Name: faker.name.firstName(),
Surname: faker.name.lastName(),
Password: faker.internet.password(),
Email: faker.internet.email(),
Birthday: faker.date.birthdate()}

await fs.writeFile("people.txt", JSON.stringify(generator))

const user     = await rl.question('Vartotojas:');
const pass     = await rl.question('Slaptažodis:');

console.log("Vardas:", user)
console.log("Slaptažodis:", pass)

try {
    user == "User";
    pass == "1234";
} catch {
    console.log("Suvesti duomenys neteisingi")
} console.log("Suvesti duomenys teisingi")

/*if (user != "User" || pass != "1234") {
  console.log("Prisijungimo duomenys neteisingi")
} else {
    console.log("Viskas gerai") }*/