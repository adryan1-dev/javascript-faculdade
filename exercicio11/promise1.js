const newPromise = new Promise((resolve,reject) => {

    const promise = false

    if(promise){
        resolve('Deu bom!!')
    } else{
        reject('Ocorreu um erro.')
    }
})

newPromise
.then((resultado) =>{
    console.log('Tudo certo: ' + resultado)
})
.catch((erro) =>{
    console.log('Deu ruim: ' + erro)
})