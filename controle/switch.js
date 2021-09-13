const imprimirResultado = function (nota) {
    switch (Math.floor(nota)) {
        case 10:
        case 9:
            console.log("Quadro de Honra")
            break
        case 8: case 7:
            console.log("Aprovado")
            break
        case 6: case 5: case 4:
            console.log("Recuperação")
            break
        case 0: case 1: case 2: case 3:
            console.log("Reprovado")
            break
        default:
            console.log("NOTA INVALIDA")
    }
}

imprimirResultado(10)
imprimirResultado(7.5)
imprimirResultado(5.9)
imprimirResultado(1)
imprimirResultado(20)