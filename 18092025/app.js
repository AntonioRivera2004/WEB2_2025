//Función declarativa
function numeroAleatoreo(min, max)
{
    return Math.floor(Math.random()*(max-min)+min);
}

console.log(numeroAleatoreo(1,11));

//Función expresada

const miNumero=function numeroAleatoreo(min,max)
{
    return Math.floor(Math.random()*(max-min)+min);
}

console.log(miNumero(2,20));