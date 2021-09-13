function soBoaNoticia(nota){
    if(nota >= 7 ){
        console.log("Aprovado " + nota)
    }
}

soBoaNoticia(8.1)
soBoaNoticia(7.3)


function seForVerdadeEuFalo(valor){
    if(valor){
        console.log("É verdade.... "  + valor)
    }
}
seForVerdadeEuFalo(null)
seForVerdadeEuFalo(undefined)
seForVerdadeEuFalo(0)
seForVerdadeEuFalo()
seForVerdadeEuFalo(NaN)
seForVerdadeEuFalo(-1)
seForVerdadeEuFalo(" ")
seForVerdadeEuFalo("?") 
seForVerdadeEuFalo([])
seForVerdadeEuFalo('')