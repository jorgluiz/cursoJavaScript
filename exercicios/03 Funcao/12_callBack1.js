const fabricantes = ['Mercedes', 'Audi', 'BMW']

function imprimir(nome, indice){
    console.log(`${indice + 1}. ${nome}`)
}
fabricantes.forEach(imprimir)

// 1 ex:
fabricantes.forEach(function(fabricante){
    console.log(fabricante)

})

// 2 ex: função arrow
fabricantes.forEach(fabricante => console.log(fabricante))