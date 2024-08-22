async function buscaEndereco(cep) {
    try {
        const consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const consultaCEPConvertida = await consultaCEP.json();

        if (consultaCEPConvertida) {
            throw new Error('CEP Não existente!');
        }
        return consultaCEPConvertida;
    } catch (erro) {
        console.log(erro.message);
        return null;  // Retorna null em caso de erro para não quebrar o array de respostas
    }
}

let ceps = ['29176675', '20010140', '29178677'];
let conjuntoCeps = ceps.map(valores => buscaEndereco(valores));

Promise.all(conjuntoCeps).then(respostas => {
    console.log(respostas);
});
