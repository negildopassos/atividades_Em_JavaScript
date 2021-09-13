function trabalho(plano,salario){
    switch(plano){
        case "A":
            return salario= ((salario*10)/100) + salario
            break
            case "B":
                return salario= ((salario*15)/100) + salario
                break
                case "C":
                    return salario= ((salario*20)/100) + salario
                    break
                    default:
                        return "Plano Invalido"
    }

}

console.log(trabalho("A",100))
console.log(trabalho("B",2000))
console.log(trabalho("C",3000))
console.log(trabalho("D",100))