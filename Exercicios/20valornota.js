function sacarmoney(saque){
    let contador100 =0 
    let contador50=0
    let contador10=0
    let contador5=0
    let contador1 =0
    let nota = calccalornota(saque)

    while(saque>=nota){
        switch(nota){
            case 100:
                saque -=100
                contador100++
                break
                case 50:
                    saque -=50
                    contador50++
                    break
                    case 10:
                        saque -=10
                        contador10++
                        break
                        case 5:
                            saque -= 5
                            contador5++
                            break
                            case 1:
                                saque-=1
                                contador1++
                                break
        }

        nota = calccalornota(saque)

    }
    return Resultado(contador50,contador100, contador10,contador5, contador1)
}

function calccalornota(saque){
    if(saque>=100){
        return 100
    }else if(saque >=50){
        return 50
    }else if(saque >=10){
        return 10
    }else if(saque >=5){
    return 5
    }else if(saque >= 1){
        return 1
    }
}


function Resultado(contador50,contador100, contador10,contador5, contador1){
    let resultado = ""

    if(contador100>0){
        resultado += `${contador100} notas(S) de R$ 100.`
    }

    if(contador50>0){
        resultado += `${contador50} notas(S) de R$ 50.`
    }
    if(contador10>0){
        resultado += `${contador10} notas(S) de R$ 10.`
    }
    if(contador5>0){
        resultado += `${contador5} notas(S) de R$ 5.`
    
}if(contador1>0){
    resultado += `${contador1} notas(S) de R$ 1.`
}
return resultado
}


console.log(sacarmoney(25))