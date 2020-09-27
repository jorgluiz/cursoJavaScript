//função normal
let dobro = function (a){
    return 2 * a
}

//Sobrescrevendo variável DOBRO
dobro = (a) => {   //Função arrow. A função arrow é sempre uma função anônima 
    return 2 * a
}

dobro = a => 2 * a // return implícito
console.log(dobro(Math.PI))

let ola = function () {
    return 'Olá'
}

ola = () => 'Olá'
ola =  _ => 'Olá' // possui um parâmetro 
console.log(ola())