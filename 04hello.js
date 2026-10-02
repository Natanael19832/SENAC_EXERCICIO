import { number } from '@inquirer/prompts';

const idade = await number ({ message: 'digite sua idade:'});

if (idade >=18) {
    console.log ("V Entrada liberada: Bem vindo ao evento, divirta se.")
} else {
    console.log("-entrada bloqueada: Evento para maiores de 18 anos desculpas.");
}
