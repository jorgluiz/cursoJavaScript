// Função em JS é first-Class Object (Citizens)
// Higher-order function

// Criar de forma literal
/**Função pode receber parâmetros e pode retornar um valor */
function fun1() {

}

// Armazenar uma function (Função) em uma variável
const fun2 = function(a) {
   // Corpo da função {}
}
// Chamando a função
fun2()

// Armazenar função em um array
//declarando a função dentro do array, não é comum!!!
const array = [function(a, b) {return a + b}, fun1, fun2]
console.log(array[0](2, 3))

// Armazenar em um atributo de objeto
const obj = {} // Objeto vazio
obj.falar = function () {
   
   return 'Opa' 
}
console.log(obj.falar())

// Passar função como parâmetro
function run(fun){
   fun()
}

run(function () { console.log('Executando...') })
