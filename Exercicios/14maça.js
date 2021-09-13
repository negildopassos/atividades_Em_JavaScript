function teste(fruta) {

    switch (fruta) {
        case "maça":
            console.log("não vendemos essa fruta aqui")
            break
        case "kiwis":
            console.log("Estamos com escassez de kiwis")
            break
        case "melancia":
            console.log("Aqui esta, são 3 reais o quilo")
            break
        default:
            console.log("Valor errado")
    }

}

teste("maça")
teste("kiwis")