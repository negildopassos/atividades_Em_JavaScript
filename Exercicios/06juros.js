function Coposto(capini, taxaju, temp ){
    return (capini*Math.pow((1+taxaju),temp))
}


console.log(Coposto(3000,0.03,1))


function Simples(cap,tx, tempo){
    return(cap*(1+tx*tempo))
}

console.log(Simples(1200,0.02,15))