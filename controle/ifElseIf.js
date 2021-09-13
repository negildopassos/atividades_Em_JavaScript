Number.prototype.entre = function(inicio, fim){
    return this >= inicio && this <= fim
}

const imprimirNota = function(nota){
    if(nota.entre(9,10)){
        console.log("Quadro de Honra")
    }else if(nota.entre(7, 8.99)){
        console.log("Aprovado")
    }else if(nota.entre(4,6.99)){
        console.log("Recuperação")
    }else if(nota.entre(0,3.99)){
        console.log("Reprovado")
    }else{
        console.log("NOTA INVALIDA")
    }
}


imprimirNota(10)
imprimirNota(7.5)
imprimirNota(4.9)
imprimirNota(1)
imprimirNota(20)