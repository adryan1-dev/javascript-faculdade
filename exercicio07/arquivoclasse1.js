class dispositivoEletronico{
    constructor(nome){
        this.nome = nome
        this.ligado = false
    }

    ligar(){
        if(this.ligado){
            console.log('O dispositivo já está ligado')
        } else{
            this.ligado = true
        }
    }
}

class Smartphone extends dispositivoEletronico{
    constructor(nome,cor,modelo){
        super(nome)
        this.cor = cor
        this.modelo = modelo
    }
}

var s1 = new Smartphone('Samsung', 'Branco', 'A52s')
console.log(s1)

s1.ligar()

s1.ligar()