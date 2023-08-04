let bebida = 'café'
let valor= ''

switch(bebida){
    case 'café':
        valor = 2.50
        break;
    
    case 'leite':
        valor = 3.00
        break;

    case 'chá':
        valor = 2.00    
        break;
    
    default:
        console.log('Opção inválida! Escolha entre café, leite ou chá.')
        return;
}

console.log(`Você escolheu ${bebida}, o valor a pagar é de R$${valor.toFixed(2)},`)