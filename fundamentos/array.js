const valores = [7.7, 6.8, 9.3, 8.8]
console.log(valores[0], valores[3])
console.log(valores[4])


valores[4] = 10


//console.log(valores)

//console.log(valores.length)

valores.push({ id: 3 }, false, null, 'teste')
console.log(valores)

console.log(valores.pop())

delete valores[0]

console.log(typeof valores)
