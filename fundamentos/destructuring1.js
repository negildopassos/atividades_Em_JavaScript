// novo recurso E2015

const pessoa = {
    nome:'Ana',
    idade:18,
    endereco:{
        logradouro: 'Rua ABC',
        numero: 13
    }

}

const { nome, idade} = pessoa
console.log(nome,idade)

const {nome: n, idade:i} = pessoa
console.log(n,i)

const { sobrenome, bemhumorado  = true} = pessoa 
console.log(sobrenome, bemhumorado)

const { endereco:{logradouro, numero,cep}} = pessoa
console.log(logradouro, numero, cep)


const {conta:{agen, numero1}} = pessoa
console.log(agen,numero1)
