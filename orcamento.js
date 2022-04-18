// consulta CEP

const pesquisarCep = async () => {
  const cep = document.getElementById("cep").value;
  const url = `http://viacep.com.br/ws/${cep}/json/`;
  const data = await fetch(url);
  const endereco = await data.json();

  const logradouro = document.getElementById("logradouro");
  const bairro = document.getElementById("bairro");
  const cidade = document.getElementById("cidade");
  const estado = document.getElementById("estado");

  logradouro.value = endereco.logradouro;
  bairro.value = endereco.bairro;
  cidade.value = endereco.localidade;
  estado.value = endereco.uf;
};

document.getElementById("cep").addEventListener("focusout", pesquisarCep);

// add parâmetros na url

const parametros = new URLSearchParams(location.search);

const verificarProdutos = (parametro) => {
  const elemento = document.getElementById(parametro);
  if (elemento) {
    elemento.checked = true;
  }
  //   console.log(elemento);
};

parametros.forEach(verificarProdutos);
