function obterValor(valor){
    return new Promise((resolve,reject) => {
        if(valor > 10){
            valor += 1
            resolve(valor)
        } else{
            reject('Não foi possivel obter o valor.')
        }
    })
}

function dobrarValor(valor){
    return valor * 2
}

function adicionar10(valor){
    return valor + 10
}

obterValor(2)
.then((valor) => {
    console.log('valor obtido')
    return dobrarValor(valor)
})
.then((novoValor) => {
    console.log('fazendo novo tratamento')
    return adicionar10(novoValor)
})
.then((resultado) => {
    result = resultado + 5
    console.log('O valor final obtido é: ', result)
})
.catch((erro) => {
    console.log('Ocorreu um erro: ', erro)
})