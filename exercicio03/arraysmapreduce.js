const numeros = [1,2,3,4,5,6,7,8,9,10]

let multiplicação = numeros.map(num => num * 3)
console.log(multiplicação)

const produtos = [
    {id: 1, descricao: 'Smartphone', categoria: 'Eletrônico'},
    {id: 2, descricao: 'Notebook', categoria: 'Eletrônico'},
    {id: 3, descricao: 'Geladeira', categoria: 'Eletrodoméstico'},
    {id: 4, descricao: 'Prato', categoria: 'Cozinha'},
    {id: 5, descricao: 'Caderno', categoria: 'Escolar'},
    {id: 6, descricao: 'Fogão', categoria: 'Eletrodoméstico'},
]

let listaProdutos = produtos.map(prod => prod.descricao)
console.log(listaProdutos)

let soma = numeros.reduce(function(total,numero){
    return total + numero
}, 0)

console.log(soma)