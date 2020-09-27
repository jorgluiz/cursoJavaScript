function soBoaBoticia(nota){
    if(nota >= 7){
        console.log('Aprovado com ' + nota)
    }


    else if(nota){
     console.log('Notícia ruim')
    }
}

soBoaBoticia(8.1)
//soBoaBoticia(6.1)

function seForVerdadeEuFalo(valor){
    if(valor){
        console.log('É verdade... ' + valor)
    }
}

seForVerdadeEuFalo()
seForVerdadeEuFalo(null)
seForVerdadeEuFalo(undefined)
seForVerdadeEuFalo(NaN)
seForVerdadeEuFalo('')
seForVerdadeEuFalo(0)
seForVerdadeEuFalo(' ')
seForVerdadeEuFalo(-1)