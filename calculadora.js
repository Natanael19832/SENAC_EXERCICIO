import { number , select } from '@inquirer/prompts';

const Valor = await number ({ message: 'valor total da compra?:'});

const pagamento = await select ({ message: 'forma de pagamento:',
    choices: [ 
        {name: 'PIX (10% DE DESCONTO)', value: 'PIX"'},
        {name: 'Cartão a vista (5% de desconto)', value: "AV"},
        {name: 'cartão parcelado(sem desconto)', value: "PARC"}]});



switch 
//finaliza amanha



