const produto = new Object

produto.nome = "Cadeira"
produto["marca do produto"] = "Generica"
produto.preco = 220

console.log(produto)
delete produto.preco
delete produto ["marca do produto"]

console.log(produto)


const carro = {
    modelo:"A4",
    valor: 90000,
    proprietario:{
    nome: "Negildo",
    idade: 28,
    endereco: {
        logradouro : "Rua ABC",
        numero : 123

    }

},
condutores: [{
    nome:"Junior",
    idade: 28

},{
    nome:"Ana",
    idade: 45
}],

calcularValorSeguro: function(){
    //...
}
}

carro.proprietario.endereco.numero = 100

carro["proprietario"] ["endereco"] ["logradouro"] = "AV Gigante"