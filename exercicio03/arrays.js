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