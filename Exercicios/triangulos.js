const triangulo = function(l1,l2,l3){

        if(l1==l2 && l1==l3 ){
            console.log(`Esse Triangulo é Equilátero`)
        } else if (l1==l2 || l1 == l3 || l2==l3 ){
            console.log(`Esse Triangulo é Isósceles`)
        }else 
             console.log(`Esse Triangulo é Escaleno `)   
        
}
 triangulo(5,10,5)
