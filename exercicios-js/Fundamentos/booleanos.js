let isAtivo = false // let se usa para alterar a variavel
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo)// '!' é uma negacao

console.log('os verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')// basta ter um espaco em branco
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log('os falsos...')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log("para finalizar...")
console.log(!!(''|| null || 0 || ' '))// por causa que um desses é verdadeiro

let nome = ''
console.log(nome || 'Desconhecido')
