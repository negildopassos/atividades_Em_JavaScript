function tratarErrorELancar(erro){
    throw new Error("O nome esta errado")
}

function imrpimirNomeGritar(obj){
    try{
        console.log(obj.name.toUpperCase() + "!!!")
    }
    catch(e){
        tratarErrorELancar(e)
    }finally {
        console.log('final')
    }
}

const obj = {nome: "Roberto"}
imrpimirNomeGritar(obj)