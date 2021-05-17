const nomes = ["André Velho" , "Anternor Jose Velho", "Janaine Almeida Velho", "Jaqueline Almeida Velho", "Diego Hoffmann", "Ricardo", "Jhonata"];


const retornoNomeForEach = nomes.forEach( (index, element) => {
    console.log(index+' ' +element);
});

console.log(retornoNomeForEach);


function nossoForEach(array, funcao) {
    let nossoArray = [];

    for(let i=0; i<array.length;i++) {
        let arrayItem = array[i];

        nossoArray.push(funcao(i, arrayItem));
    }

    return nossoArray;
}

const retornoNossoForEach = nossoForEach(nomes, function(index, nome){
    console.log(index +' '+nome);
});

console.log(retornoNossoForEach);