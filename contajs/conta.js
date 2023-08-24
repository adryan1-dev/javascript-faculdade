class contaCliente{
    constructor(conta,saldo,debito,credito){
        this.conta = conta
        this.saldo = saldo
        this.debito = debito
        this.credito = credito
    }

    calcularSaldoAtual(){
        return this.saldo - this.debito + this.credito
    }

    verificarSaldo(){
        const saldoAtual = this.calcularSaldoAtual()
            if(saldoAtual >= 0){
                alert(`Saldo positivo de: R$ ${saldoAtual}`)
            } else{
                alert(`Saldo negativo de: R$ ${saldoAtual}`)
            }
    }
}

let numeroConta = prompt('Digite o numero da conta')
let saldo = parseFloat(prompt('Digite o saldo da conta'))
let debito = parseFloat(prompt('Digite o débito da conta'))
let credito = parseFloat(prompt('Digite o crédito da conta'))

let conta = new contaCliente(numeroConta,saldo,debito,credito)
conta.verificarSaldo()
