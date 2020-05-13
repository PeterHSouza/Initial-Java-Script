const nome = 'Rebeca'
const concatenacao = 'Olá ' + nome + '!'
const template  = `
    Olá 
    ${nome}!` //abre com o simbolo da crase
console.log(concatenacao, template)

//expressoes ...

console.log(`1 + 1 = ${1 + 1}`) // o que estiver entre chaves ele vai tentar interpretar

const up = texto => texto.toUpperCase()// uppercase para colocar as letras maiusculas 
console.log(`Ei... ${up('cuidado')}!`)   
 