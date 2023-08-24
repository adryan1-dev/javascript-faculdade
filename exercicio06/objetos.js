// 1 forma de criar objeto

const pessoa = {
    nome: 'Adryan',
    sobrenome: 'Chaves'
}

console.log(pessoa)

//2 forma
const funcionario = new Object()
funcionario.nome = 'Adryan'
funcionario.sobrenome = 'Chaves'

console.log(funcionario)

//3 forma

function newPerson(nome,sobrenome,i){
    return {
        nome,
        sobrenome,
        idade: i,
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}, ${this.idade}`
        }
    }
}

const p1 = newPerson('Adryan', 'Chaves', 22)
const p2 = newPerson('Hiroto', 'Malagueta',20)

console.log(p1.nomeCompleto)
console.log(p2.nomeCompleto)
