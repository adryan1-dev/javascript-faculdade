const numeros = [1,'2',3,4,5]

try{
    const doubleNumbers = numeros.map((num) =>{
        if(typeof num !== 'number'){
            throw new Error('Só pode conter números dentro do array')
        } else{
            return num * 2
        }
    })

    console.log(doubleNumbers)
}
catch(error){
    console.log('Ocorreu uma exceção: ' + error.message)
}