function area (altura,largura){
const area = largura*altura
if(area> 20){
    console.log(`Valor acima do permitido: ${area}m2.`)
}else{
    return area
}
}

area (50,90)
console.log(area(2,2))  
console.log(area(2))
console.log(area())
console.log(area(2,3,7,22,33))
console.log(area(5,5))