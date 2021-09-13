const valor = "Global"

function minhafuncao (){
    console.log(valor)
}

function exe(){
    const valor = "Local"
    minhafuncao()
}

exe()