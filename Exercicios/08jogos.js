let stringpontos = "10, 20, 20, 8 ,25 ,3 ,0 ,30, 1 "


function Jogos (stringpontos){

let pontuacao = stringpontos.split(",")    
let qtdQuebraDeRecords = 0
let piorJogo = 1
let maiorPontuacao = pontuacao [0]
let menorPontuacao = pontuacao [0]

for (let i = 1; i < pontuacao.length; i++) {
    if(pontuacao[i] > maiorPontuacao) {
        maiorPontuacao = pontuacao[i]
        qtdQuebraDeRecords++
    }else if (pontuacao[i] < menorPontuacao) {
        menorPontuacao = pontuacao[i]
        piorJogo = i+1;
    }
}
return [qtdQuebraDeRecords, piorJogo]
}



console.log(Jogos(stringpontos))
