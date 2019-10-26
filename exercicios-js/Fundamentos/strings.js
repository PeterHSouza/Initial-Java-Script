const escola = "Cod3r"

console.log(escola.charAt(4))// gera o caractere que esta na posicao 4 = "r"
console.log(escola.charAt(5))
console.log(escola.charCodeAt(3))// gera o numero da letra no campo decimal
console.log(escola.indexOf('3'))// vai retornar o indice "3" de dentro do Cod3r


console.log(escola.substring(1))//conta sem o primeiro caractere
console.log(escola.substring(0, 3))//conta do 1 caractere e nao conta o terceiro

console.log('Escola ' .concat(escola).concat("!"))// concatena ou seja junta os caracteres
console.log('Escola ' + escola + ("!"))
console.log(escola.replace(3, 'e'))// substitui o local indicado por caractere ou numero escolhido
console.log(escola.replace(/\d/, 'e'))// substituir todos os digitos pela letra "e"
console.log(escola.replace(/\w/, 'C'))// substitui so o primeiro caractere pela letra escolhida
console.log(escola.replace(/\w/g, 'e'))// substitui todos os caracteres pela letra escolhida

console.log('Ana,Maria,Pedro'.split(',')) //para separar em array
