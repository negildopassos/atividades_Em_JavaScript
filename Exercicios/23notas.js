function nota(n1, n2, n3, codaluno) {
    let notas = []
    notas.push(n1)
    notas.push(n2)
    notas.push(n3)
    notas.sort((a, b) => a < b ? 1 : -1)
    let mediafinal = (notas[0] * 4 + notas[1] * 3 + notas[2] * 3) / 10

    console.log(`Codigo do aluno: ${codaluno}. Notas: ${n1}, ${n2},${n3}, ${mediafinal < 5 ? 'reprovado' : 'aprovado'} `)
}


nota(1,10,10,2)