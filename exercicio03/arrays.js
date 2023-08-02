const numeros = [2, 1, 7, 8, 4]

//Verificar se o número 

let imparOuMenorQueZero = false

for(let i = 0; i < numeros.length; i++){
    if (numeros[i] % 2 !== 0 || numeros[i] < 0){
    imparOuMenorQueZero = true
    }
}

// divisível por 3 ou 5

let divisívelPor3Ou5 = false

for(let i = 0; i < numeros.length; i++){
    if (numeros[i] % 3 == 0 || numeros[i] % 5 == 0){
    divisívelPor3Ou5 = true
    }
}

console.log(`Tem algum número impar ou negativo? ${imparOuMenorQueZero}`)
console.log(`Tem algum número divisível por 3 ou 5? ${divisívelPor3Ou5}`)

// exercicio proposto Avançando com Arrays

let nomes = ['Guilherme', 'Manoel', 'Samuel', 'Davi', 'João']
console.log(nomes)

// Acrescentar o nome da Mônica

nomes.push('Mônica')
console.log(nomes)

//Retire o último elemento do array

nomes.pop()
console.log(nomes)

// Encontre a posição do Samuel = tem que retornar 2 [0, 1, 2]
var samuel = nomes.indexOf('Samuel')
console.log(samuel)

// Trocar o Manoel por Emanoel
var emanoel = nomes.splice(1,1,'Emanoel')
console.log(nomes)

//Separar os meses do ano em trimestres
var meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
console.log(meses)

var tri1 = meses.slice(0,3)
var tri2 = meses.slice(3,6)
var tri3 = meses.slice(6,9)
var tri4 = meses.slice(9,12)
console.log(tri1)
console.log(tri2)
console.log(tri3)
console.log(tri4)

// filtrar produtos por categoria

var produtos = [
    {id: 1, descricao: 'Smartphone', categoria: 'Eletrônico'},
    {id: 2, descricao: 'Notebook', categoria: 'Eletrônico'},
    {id: 3, descricao: 'Geladeira', categoria: 'Eletrodoméstico'},
    {id: 4, descricao: 'Prato', categoria: 'Cozinha'},
    {id: 5, descricao: 'Caderno', categoria: 'Escolar'},
    {id: 6, descricao: 'Fogão', categoria: 'Eletrodoméstico'},
]

var buscaPorCategoria = produtos.filter(item => item.categoria == 'Eletrônico')
console.log(buscaPorCategoria)