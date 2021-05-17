const parcelas = [
    {
        "id" : 1,
        "valor": 300.00,
        "total_parcelas": 3,
        "dataVencimento": '2021-06-02',
        "cliente": "Diego Hoffmann",
        "observação": "Compra de sistema",
        "forma_pagamento": "cartao_credito",
        "status": "ABERTA"
    },
    {
        "id" : 2,
        "valor": 250.00,
        "total_parcelas": 2,
        "dataVencimento": '2021-06-02',
        "cliente": "André Velho",
        "observação": "Compra de sistema",
        "forma_pagamento": "boleto",
        "status": "ABERTA"
    },
    {
        "id" : 3,
        "valor": 250.00,
        "total_parcelas": 1,
        "dataVencimento": '2021-06-02',
        "cliente": "Jaqueline Almeida Velho",
        "observação": "Compra de sistema",
        "forma_pagamento": "pix",
        "status": "CANCELADA"
    },
];



const allFaturasArray = parcelas.reduce ( (faturas, parcelaAtual) => {

    console.log(faturas);
    console.log(parcelaAtual);

    return gerarNovaFatura(faturas, parcelaAtual);

}, [] );


function gerarNovaFatura(faturas, parcelaAtual) {

    const valorParcela =  parcelaAtual.valor/parcelaAtual.total_parcelas;
    for (let i=0;i<parcelaAtual.total_parcelas;i++) {
        

        let newFatura = Object.assign({}, parcelaAtual);//CLONA A PARCELA COPIANDO TODO SEU CONTEUDO.

        console.log(newFatura);

        newFatura.valor = valorParcela;
        newFatura.parcelaAtual = (i+1);

        faturas.push(newFatura);
    }

    return faturas;

}

console.log(allFaturasArray);


const filterApenasFaturasAbertasArray = allFaturasArray.filter( function(fatura, index) {
    console.log(fatura.status);
    return fatura.status === 'ABERTA';
} );

console.log(filterApenasFaturasAbertasArray);

const filterApenasFaturaDoTipoBoletoArray = allFaturasArray.filter( function(fatura) {
    return fatura.forma_pagamento === 'boleto';
});

console.log(filterApenasFaturaDoTipoBoletoArray);


const faturasPorTipoDecobrancaObject = allFaturasArray.reduce( (faturas, faturaAtual) => {

    console.log(faturas);
    console.log(faturaAtual.forma_pagamento);

    faturas[faturaAtual.forma_pagamento] = faturas[faturaAtual.forma_pagamento] || [];

    faturas[faturaAtual.forma_pagamento].push(faturaAtual);

    return faturas;
}, {});

console.log(faturasPorTipoDecobrancaObject.boleto);