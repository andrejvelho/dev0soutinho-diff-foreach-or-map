const nomes = ["André Velho" , "Anternor Jose Velho", "Janaine Almeida Velho", "Jaqueline Almeida Velho", "Diego Hoffmann", "Ricardo", "Jhonata"];


const retornoFilter = nomes.filter( function (item, index, arrayOrigem) {
    return item.lastIndexOf("And") > -1;
});

console.log(retornoFilter);


function meuProprioFilter(nomes, funcao) {
    let novoArray = [];

    for (let i=0;i<nomes.length;i++) {
        const arrayItem = nomes[i];

        if (funcao(arrayItem, i, nomes)) novoArray.push(arrayItem);
    }

    return novoArray
}

const retornoMeuProprioFilter = meuProprioFilter(nomes, function(item, index, arrayOrigin){
    return item.lastIndexOf("J") > -1;
});

console.log(retornoMeuProprioFilter);