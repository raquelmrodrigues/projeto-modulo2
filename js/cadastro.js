'use strict';

const preencherForm = (endereco) => {
    document.getElementById('inputAddress').value = endereco.logradouro;
    document.getElementById('Cidade').value = endereco.localidade;
    document.getElementById('inputState').value = endereco.uf;
    document.getElementById('bairro').value = endereco.bairro;
}

const cepValido = (cep) => cep.length == 8;

const pesquisarCep = async() => {
    const cep = document.getElementById('CEP').value;
    const url = `http://viacep.com.br/ws/${cep}/json/`

    if(cepValido(cep)) {
        const dados = await fetch(url);
        const endereco = await dados.json();
    
        if (endereco.hasOwnProperty('erro')){
            document.getElementById('inputAddress') =  'CEP não encontrado';
        }else {
            preencherForm(endereco);
        }
    }else {
        document.getElementById('inputAddress').value = 'CEP inválido';
    }
   
}

document.getElementById('CEP').addEventListener('focusout', pesquisarCep);
