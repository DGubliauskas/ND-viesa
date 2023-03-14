import chalk from 'chalk';
import { faker } from '@faker-js/faker';
import fs from 'node:fs/promises';

const generator = {
Name: faker.name.firstName(),
Surname: faker.name.lastName(),
Password: faker.internet.password(),
Email: faker.internet.email(),
Birthday: faker.date.birthdate()}

await fs.writeFile("people.txt", JSON.stringify(generator))
