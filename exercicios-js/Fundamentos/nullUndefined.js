let valor //nao inicializada
console.log(valor)

valor = null //ausencia de valor 
console.log (valor)
//console.log(valor.toString()) //ERRO!

const produto = {}
console.log(produto.preco)
console.log(produto)

produtopreco = 3.50
console.log(produto)

produto.preco = undefined //evite atribuir undefined
console.log(!!produto.preco)
// delete produto.preco
console.log(produto)

produto.preco = null //sem preco
console.log(!!produto.preco)
console.log(produto)