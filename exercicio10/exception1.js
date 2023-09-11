function divisao(a,b){
    if(b === 0){
        throw new Error('Divisão por 0 não é permitida')
    } else{
        return a / b
    }
}

try{
    const resultado = divisao(10,0)
    console.log(resultado)
} catch(error){
    console.log('Ocorreu uma exceção: ' + error.message)
}