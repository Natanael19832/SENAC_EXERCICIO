import { number, confirm } from '@inquirer/prompts';

const idade = await number({message:'idade->' , required: true});
const ingresso = await confirm ({ message: 'tem ingresso? ->', required: true});
const acompanhado = await confirm ({ message: 'acompanhado?->', nrequired: true});

const mensagem = ((ingresso) && (idade >= 18 || acompanhado))? "entrada liberada!" : "volta pra casa!";

console.log(mensagem);

