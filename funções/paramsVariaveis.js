function soma (){
    let soma = 0;
    for(i in arguments){
        soma+= arguments[i]
    }
    return soma
}

console.log(soma(10,5,6,9,3))
