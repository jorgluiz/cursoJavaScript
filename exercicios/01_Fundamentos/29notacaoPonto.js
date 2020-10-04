//console.log(typeof console)

console.log(Math.ceil(6.1))

const obj1 = {}
obj1.nome = 'Bola'
//obj1['nome '] = 'Bola2'

console.log(obj1.nome)

function Obj(nome){
    // poderia usar a variavel (var), como mostra o exemplo abaixo
    //OBS: a variavel (var) ficaria só disponível dentro do escopo {} da função*********
    //já o this.nome pode ficar disponível fora também

   //var nome = nome
    this.nome = nome
    this.exec = function(){
        console.log('Exec....')
    }
}

const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')
console.log(obj2.nome)
console.log(obj3.nome)

obj3.exec()


