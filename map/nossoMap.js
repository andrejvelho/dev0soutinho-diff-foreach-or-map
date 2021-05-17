const nomes = ["André Velho" , "Anternor Jose Velho", "Janaine Almeida Velho", "Jaqueline Almeida Velho", "Diego Hoffmann", "Ricardo", "Jhonata"];


const retornoMap = nomes.map(function(nome, index) {
    console.log(index+' '+nome);

    return `<li>${nome}</li>`;
});

console.log(retornoMap);

function nossoMap(array, funcao) {
    const novoArray = [];

    for(let i=0;i<array.length;i++) {
        let arrayItem = array[i];
        novoArray.push(funcao(arrayItem, i));
    }

    return novoArray;
}

const retornoNossoProprioMap = nossoMap(nomes, function(nome, index) {
    console.log(index+' '+nome);

    return `<li>${nome}</li>`;
});

return console.log(retornoNossoProprioMap);