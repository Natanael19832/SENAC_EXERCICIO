//estrutura de repetição
//while enquanto for vdd ou falso
//let: pode mudar       const: não muda
//multiplicando ++ ou *= ou /= ou -=

import { input  } from '@inquirer/prompts';

let contador = 1;

while (contador <= 10)

{console.log(`volta atual do loop: ${contador}`); contador++}

console.log("Loop finalizado com sucesso!");

for (let i=1;i<=5;i++)
{console.log('contando:${i}');}