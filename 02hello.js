import { input, number } from '@inquirer/prompts';

const nome = await input({message: 'qual seu nome?'});

console.log("bem vindo, "+ nome + "!");

let idade = await number({
    message: 'idade',
    min: 0,
    max: 120,
    required: true,
})

let idade_depois = idade + 1;

console.log("bem vindo," + nome + "!");
// console.log(typeof idade);
// console.log(typeof idade_depois);
console.log("ano que vem vc tera ", + idade_depois + " anos."

import { input, number } from '@inquirer/prompts';

let idade = await number

console.log