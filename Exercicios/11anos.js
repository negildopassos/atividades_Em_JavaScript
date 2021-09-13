function bissexto (ano){
    if(ano % 4 ==0){
        return true
    }else if(ano % 400 ==0){
        return true
    }else{
        return false
    }
}

console.log(bissexto(2014))