var listaProdutos = ['geladeira', 'fogão', 'air fryer']
var listaEmMaiusculo = listaProdutos.map((elemento) => elemento.charAt(0).toUpperCase() + elemento.slice(1))

console.log(listaEmMaiusculo)