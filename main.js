// deixar link da página atual sublinhado no header

const links = document.querySelectorAll(".link-area a");

const sublinhaLink = (item) => {
  const href = item.href;
  const paginaAtual = document.location.href;
  console.log(href);

  if (href == paginaAtual) {
    item.style.borderBottom = "2px solid #fff";
  } else {
    console.log("página diferente");
  }
};

links.forEach(sublinhaLink);
