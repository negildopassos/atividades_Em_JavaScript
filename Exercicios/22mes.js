function juros(mes,valor){
    if(mes >0 && mes < 13){
        atraso = mes - 1 
        return valor*(1+0.05*atraso)


    }else{
        return  "mes invalido"
    }

}

console.log(juros(11, 100))