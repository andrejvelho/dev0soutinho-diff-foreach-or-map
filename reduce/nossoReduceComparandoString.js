//#### Transformações com Reduce comparando string e retornando a maior palavra

const palavras = ['Harry Potter e a pedra filosofal', 'Harry Potter e o enigma do principe', 'O Senhor dos aneis a sociedade do anel'];

const maiorPalavra = palavras.reduce( (maiorPalavra, palavraAtual) =>  {

        console.log(maiorPalavra);
        console.log(palavraAtual);

        if (palavraAtual.length > maiorPalavra.length) return palavraAtual;
        else return maiorPalavra;

    }, '');

console.log(maiorPalavra);