//função em js é firt- class object (citizens)
//higher-order function

// função de frma literal
function fun1 (){ 

}

// Armazenar em uma variavel

const fun2  = function(){

}

// Armazenar em um Array

const array = [function(a,b){return (a+b)}]

// Armazenar em um atributo de um objeto

const pessoa = {}
pessoa.falar = function(){return "opa"}

console.log(pessoa.falar())

// passar função como parametro
function run(fun){
    fun()
}

run(function (){console.log("Executando")})

function soma(a,b){
    return function(c){
        console.log(a+b+c)
    }
}

soma(2,3)(4)
const cincoMais = soma(2,3)
cincoMais(4)