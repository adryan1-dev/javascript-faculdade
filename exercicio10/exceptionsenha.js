function verificarSenha(senha){
    if(senha.length < 8){
        throw new Error('Sua senha deve conter no mínimo 8 digitos.')
    } else{
        console.log('Senha válida: ' + senha)
    }
}

try{
    const senha1 = 'senha123'
    verificarSenha(senha1)

    const senha2 = 'senha'
    verificarSenha(senha2)
}
catch(error){
    console.log('Ocorreu uma exceção: ' + error.message)
}