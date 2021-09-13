const notas = [6.7,8.2,9.3,5.1,3.3]

for(let i in notas){
    console.log(i, notas[i])
}

const pessoa = {
    nome: "Junior",
    idade: 27,
    peso: 90
}

for(let atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`)
}