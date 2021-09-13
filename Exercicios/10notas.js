function notas(nota){
    let notacarrigida= arredondar(nota)

    if(notacarrigida>=40){
        return `Aluno Aprovado com nota ${notacarrigida}`
    }else  {
        return `Aluno reprovado com nota ${notacarrigida}`
    }
} 

function arredondar (nota) {
    if (nota % 5 > 2) {
        return nota + (5 - (nota % 5))
    } else {
        return nota
    }
}

console.log(notas(38))