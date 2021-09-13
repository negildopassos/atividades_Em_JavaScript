function numero(n) {
    switch (n) {
        case 0:
            return "Zero"
            break
        case 1:
            return "Um"
            break
        case 2:
            return "Doi"
            break
        case 3:
            return "Tres"
            break
        case 4:
            return "Quatro"
            break
        case 5:
            return "Cinco"
            break
        case 6:
            return "Seis"
        case 7:
            return "Sete"
        case 8:
            return "Oito"
        case 9:
            return "Nove"
            break
        case 10:
            return "Dez"
            break
        default:
           return "Número Fora de intervalo"

    }

}

console.log(numero(1))
console.log(numero(5))
console.log(numero(20))