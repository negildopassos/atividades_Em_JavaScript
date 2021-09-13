 const notas = [5.5,6.9,7.8,9.6,1.5,4.5]

 // sel callback

 const notasBaixas1 = []
 for(const i in notas){
     if(notas[i]<7){
         notasBaixas1.push(notas[i])
     }
 }

 console.log(notasBaixas1)

 //com callback

 const notasBaixas2 = notas.filter(function(notas){
    return notas < 7
 })

 console.log(notasBaixas2)
const notasMenorQue7 = nota => nota < 7
 const notasBaixas3 = notas.filter(notasMenorQue7)

 console.log(notasBaixas3)