import { number , select } from '@inquirer/prompts';

const valor_total = await number({ message: "valor total da compra->",min:0});

const forma_pagamento = await select({ message:" selecione forma de pagamento:",
    choices:[
        {name:"pix (10% de desconto)", value: "pix"},
        {name: "cartão á vista (5% de desconto)", value: "avista"},
        {name:"cartão parcelado (sem desconto)", value: "parc"},
    ]});

let valor_descontado = 0;

//switch case (forma_pagamento)
//{
 //   default: 
 //       console.log("opção inválida");
 //       break;
 //   case "pix":
 //       valor_descontado = valor_total * 0.9;
 //       break;
 //    case "avista":
  //      valor_descontado = valor_total * 0.95;
 //       break;
 //    case "parcelado":
 //       valor_descontado = valor_total * 1;
 //       break;    
//};

//console.log(`de acordo com a opção de pagamento,`)
//console.log(`o valor a ser pago é de R$ ${valor_descontado}`)

//utilizando o if(inicio)/else if(opções)/else(fim)

    if(forma_pagamento ==="pix"){
        valor_descontado = valor_total * 0.9}
    else if (forma_pagamento ==="avista"){
        valor_descontado = valor_total * 0.95}
    else if(forma_pagamento ==="parcelado"){
        valor_descontado = valor_total * 1}
    else{
        console.log ("opção invalida")};


console.log(`de acordo com a opção de pagamento,`)
console.log(`o valor a ser pago é de R$ ${valor_descontado}`)

//break parar a informação.
//exercicio casa; dontpad: Jeronimo

