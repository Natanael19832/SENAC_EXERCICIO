import { number , select } from '@inquirer/prompts';

const Valor = await number ({ message: 'valor total da compra?:'});

const pagamento = await select ({ message: 'escolha sua forma de pagamento:',
    choices: [ 
        {name: 'PIX (10% DE DESCONTO)', value: "10"},
        {name: 'Cartão a vista (5% de desconto)', value: "s"},
        {name: 'cartão parcelado(sem desconto)', value: "0"},]});




