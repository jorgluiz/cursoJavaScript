function matematica(base, exp){

    base = 3
    exp  = 2

    return base **= exp
}

console.log(matematica())


console.log('--------------------------')

//------------------------------------------------------

function expoente (base, expoente) {
    //Podemos fazer de 2 modos
    //Método antigo:
    let resultado = Math.pow(base, expoente)
    //Método novo:
    resultado = base ** expoente

    return resultado
}

console.log(expoente(2, 3))

