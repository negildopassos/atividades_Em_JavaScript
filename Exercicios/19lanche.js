function lanche(cod, qtd) {
    switch (cod) {
        case 100:
            return qtd * 3.00
            break
        case 200:
            return qtd * 4.00
            break
        case 300:
            return qtd * 5.50
            break
        case 400:
            return qtd * 7, 50
            break
        case 500:
            return qtd * 3.50
            break
        case 600:
            return qtd * 2.80
            break
        default:
            return "O produto não existe"
    }
}

console.log(lanche(100,1))

console.log(lanche(100,4))

console.log(lanche(800,1))