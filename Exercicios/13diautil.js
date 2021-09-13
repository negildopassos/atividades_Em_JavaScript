function diaUtil (dia){
    switch(dia){
        case 7 : case 1:
        console.log("fim de semana")
        break
        case 6: case 5: case 4: case 3: case 2:
        console.log("Dia Útil")
        break
        default:
            console.log("Dia invalido")


        

    }
}

diaUtil(7)