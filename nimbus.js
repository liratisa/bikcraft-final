// faz slide com imagens

const imagens = document.querySelectorAll(".img-bike li img");

const trocaImagem = (event) => {
  const imagemPrincipal = document.querySelector(".imagem-principal");
  const imagemClicada = event.currentTarget;

  imagemPrincipal.src = imagemClicada.src;
  imagemPrincipal.alt = imagemClicada.alt;
};

const galeriaClique = (imagem) => {
  imagem.addEventListener("click", trocaImagem);
};

imagens.forEach(galeriaClique);
