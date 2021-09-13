function criarProduto(nome, preco){
    return {
        nome,
        preco,
        desconto:0.1

    }
}

console.log(criarProduto("notebook", 287.32))
console.log(criarProduto("Ipad",589.6))