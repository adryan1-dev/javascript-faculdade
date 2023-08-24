class Funcionario{
    constructor(nome,idade,cargo){
        this.nome = nome
        this.idade = idade
        this.cargo = cargo 
    }

    seApresentar(){
        console.log(`Olá, me chamo ${this.nome} e tenho ${this.idade} anos.`)
    }

    trabalhar(){
        console.log(`${this.nome}, está trabalhando como ${this.cargo}`)
    }
}

class Gerente extends Funcionario{
    constructor(nome,idade,cargo,departamento){
        super(nome,idade,cargo)
        this.departamento = departamento
    }

    gerenciar(){
        console.log(`${this.nome} está gerenciando o departamento de ${this.departamento}`)
    }
}

class Desenvolvedor extends Funcionario{
    constructor(nome,idade,cargo,linguagem){
        super(nome,idade,cargo)
        this.linguagem = linguagem
    }

    programar(){
        console.log(`${this.nome} programa utilizando a linguagem ${this.linguagem}`)
    }
}

let gerente1 = new Gerente('Matheus', 27, 'Gerente', 'TI')
let dev1 = new Desenvolvedor('Adryan', 22, 'Desenvolvedor Junior', 'JavaScript')

//Instancias de gerente
gerente1.seApresentar()
gerente1.trabalhar()
gerente1.gerenciar()

//Instancias de dev
dev1.seApresentar()
dev1.trabalhar()
dev1.programar()

