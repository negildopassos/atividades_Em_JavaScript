// FUNÇÃO SEM RETORNO
 
function imprimirSoma(a, b){
    console.log(a+b)
}

imprimirSoma(2,3)
imprimirSoma(2)
imprimirSoma(2,3,6,9,8,7)

// Funcao com retorno

function soma(a,b = 0){
    return a+b

}

console.log(soma(2))