function Carro(veloxidadeMaxima = 200, delta = 5){
    //atributo privado
    let velocidadeAtual = 0

    // metodo publico

    this.acelerar = function(){
        if(velocidadeAtual +delta <= veloxidadeMaxima){
            velocidadeAtual += delta
        }else{
            velocidadeAtual = veloxidadeMaxima
        }
    }

    //2 metodo publico

    this.getVelocidadeAtual = function(){
        return velocidadeAtual
    }
}

const uno =  new Carro
uno.acelerar()
uno.acelerar()

console.log(uno.getVelocidadeAtual())


const Ferrari = new Carro (350,20)
 
Ferrari.acelerar()
console.log(Ferrari.getVelocidadeAtual())