let idade = 13, xp = 2, educaçao = 'Ensino Medio', certificado = false

if(idade >= 18 && xp >= 3 && educaçao == 'Superior' && certificado == true){
    console.log('Você está elegivel para a vaga')
} else{
    // Verificação de Idade
    let verIdade = ''
    if(idade >=18){
        verIdade = 'Apto'
    } else {
        verIdade = 'Inapto'
    }
    console.log(`Idade mínima é de 18 anos, a sua idade é: ${idade} anos (${verIdade})`)
    
    //Verificação de Experiência
    let verXp = ''
    if(xp >= 3){
        verXp = 'Apto'
    } else {
        verXp = 'Inapto'
    }
    if( xp == 1){
    console.log(`Experiência minima é de 3 anos, você tem: ${xp} ano (${verXp})`)
    } else{
        console.log(`Experiência minima é de 3 anos, você tem: ${xp} anos (${verXp})`)
    }
    //Verificação de Educação
    let verEdu = ''
    if(educaçao == 'Superior'){
        verEdu = 'Apto'
    } else {
        verEdu = 'Inapto'
    }
    console.log(`O nível minimo de educação é nível Superior, o seu é: ${educaçao} (${verEdu})`)

    //Verificação de Certificado
    let verCertif= '', posse = ''
    if(certificado == true){
        posse = 'Possui'
        verCertif = 'Apto'
    }else {
        posse = 'Não possui'
        verCertif = 'Inapto'
    }
    console.log(`O certificado é obrigatório, e você: ${posse} (${verCertif})`)
}
