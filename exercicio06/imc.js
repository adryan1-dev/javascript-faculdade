function newPerson(nome,sobrenome,altura,peso){
    return{
        nome,
        sobrenome,
        altura,
        peso,
        calculoIMC(){
            const indice = this.peso/(this.altura ** 2).toFixed(1)
            if(indice < 18.5){
                console.log('Você está abaixo do peso')
            } else{
                if(indice < 25){
                    console.log('Você está no peso normal')
                } else{
                    if(indice < 30){
                    console.log('Você está acima do peso')
                    } else{
                        if(indice < 35){
                            console.log('Você está obeso leve')
                        } else{
                            console.log('Você está obeso')
                        }
                    }
                }
            }
        }
    }
}

const p1 = newPerson('Camilo', 'DuVK', 2, 150)
p1.calculoIMC()