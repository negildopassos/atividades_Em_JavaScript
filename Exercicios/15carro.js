function carro(modelo){
    switch(modelo){
        case `hatch`:
            console.log("Compra Efetuada com sucesso")
            break
            case `Sedan`: case `motocicleta`: case `caminhonete`:
                console.log("Tem certeza que não prefere outro modelo?")
                break
            default:
            console.log("Não trabalhamos com esse tipo de automóvel aqui")
                
    }
}

carro(`hatch`)
carro(`Sedan`)
carro(`HB20`)