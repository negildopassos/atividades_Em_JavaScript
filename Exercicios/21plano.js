function planos(idade,valor=100){
    if(idade<10&&idade>0){
        return valor +80
    }else if(idade>=10 && idade<=30){
        return valor + 50
    }else if (idade >30 && idade <=60){
        return valor + 95
    }else if( idade >60){
        return 130
    }else{
        return "Idade invalida"
    }
    
}

console.log(planos(9))
console.log(planos(15))
console.log(planos(-1))
