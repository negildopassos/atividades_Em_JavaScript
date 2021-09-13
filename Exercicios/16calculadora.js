function calculadora(valor1,operador,valor2){
    switch(operador){
        case `+`:
            return valor1+valor2
            break
            case `-`:
                return valor1 - valor2
                break
                case `*`:
                    return valor2 * valor1
                    break
                    case `/`:
                        return valor1/valor2
                        break
                        default:
                            return "operações invalidas"
        

    }
}

console.log(calculadora(4, `+` ,4))
console.log(calculadora(4, `-` ,4))
console.log(calculadora(4, `*` ,4))
console.log(calculadora(4, `/` ,4))
