const peso1 = 1.0
const peso2 = Number('2.0')//outra forma de representar o numero
console.log(peso1, peso2)
console.log(Number.isInteger(peso1))// numero inteiro
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2)) // para deixar o numero com duas casas decimais 
console.log (media.toString(2))// converte em binario
console.log(typeof media)// para saber o tipo de funcao que é
console.log(typeof Number)