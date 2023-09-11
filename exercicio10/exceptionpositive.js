function checkPositive(numero){
    if(!Array.isArray(numero)){
        throw new Error('O parâmetro só pode ser um array.')
    }

    const allPositive = numero.every((num) => num > 0)
    if(!allPositive){
        throw new Error('O array só pode conter numeros positivos.')
    }

    return true
}

try{
    const numbers = [1,2,3,5,6,7]
    const isPositive = checkPositive(numbers)

    if(isPositive){
        console.log('O array só contém números positivos')
    }
} catch(error){
    console.log('Ocorreu um erro: ', error.message)
}