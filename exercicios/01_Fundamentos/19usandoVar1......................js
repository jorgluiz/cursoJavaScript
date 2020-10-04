{
    {
        {
            { var sera = 'será???' }
             console.log(sera)
        }
    }
}

console.log(sera)


function teste(){
    var local = 123 // é declarado, mas seu valor nunca é lido 
    console.log(local) //var só vai está visível dentro do escopo {}
}

teste()
//console.log(teste()) //undefined
console.log(local)    // erro! var local = 123. Não pode ser lido de fora do escopo {}
//console.log(local) //erro!


