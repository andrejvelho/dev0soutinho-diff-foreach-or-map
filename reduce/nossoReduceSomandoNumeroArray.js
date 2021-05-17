
//#### Transformações com Reduce - Somando os valores de um array

const numeros = [10, 20, 30, 40, 50];

//const reducer = (totalEsperadoNaSaida, valorCorrente) => totalEsperadoNaSaida + valorCorrente;

const total = numeros.reduce( (totalEsperadoNaSaida, valorCorrente) => {
    console.log(totalEsperadoNaSaida);
    console.log(valorCorrente);

    return totalEsperadoNaSaida + valorCorrente;

}, 0);

console.log(total);