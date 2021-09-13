function valorReal(valordecimal){
    
    valorreal =     `R$ ${valordecimal.toFixed(2).toString().replace(".",",")}`
    console.log(valorreal)    
}


valorReal(0.1+0.2)