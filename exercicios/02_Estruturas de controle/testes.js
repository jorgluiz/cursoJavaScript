const imprimirResultado = function (nota) {
    if (nota >= 10 ) {
            console.log('Quadro de Honra')

    } else if(nota == 6) {
            console.log('Aprovado')

    } else if(nota == 4){
        console.log('Recuperação')

    }else if(nota == 1){
        console.log('Reprovado')
    
    } else {
        console.log('Nota inválida')

    }

}

imprimirResultado(10)
imprimirResultado(6)
imprimirResultado(4)
imprimirResultado(1)
imprimirResultado(0)



