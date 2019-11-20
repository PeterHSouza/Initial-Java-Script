{
    {
        {
            {
                {
                    var sera = 'sera???' // a variavel var ele encherga tanto dentro quanto fora do bloco, ou seja ele é global
                    console.log(sera)
                }
            }
        }
    }
}
console.log(sera)

function teste() {
    var local = 123
    console.log(local) 
}

teste()
console.log(local)