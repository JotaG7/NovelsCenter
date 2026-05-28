//Criar um evento para salvar o input da pequisa por titulo no localstorage
//Passo 1. criação da variavel
const resultado = document.getElementById("inTitulo");

// Pegando o id theme do svg para a mudança de tema da pagina
const switchTheme = document.getElementById("theme");

//Pegando main e declarando na variavel
const cardsNovels = document.getElementById("novelsCards");

//localStorage
if (localStorage.getItem("tema") === "dark") {
  document.documentElement.classList.add("dark");
} else {
  document.documentElement.classList.remove("dark");
}

//Pegamos o conteudo salvo no local localStorage
const tituloSalvo = localStorage.getItem("campo");
//Colocando uma string vazia para não retornar nulo e o includes() retornar todas as novels
if (tituloSalvo || "") {
  resultado.value = tituloSalvo;
}

//Criar uma função que recebe um parametro padrão (permitindo a função exibir um array completo ou um array filtrado) para criar o hmtl e inserir ele, podendo tbm através da barra de pesquisa pegar uma novel pelo titulo
function listaCards(biblioteca = bibliotecaNovels) {
  // Antes eu pegava o parametro e += dentro do inneHTML, mas percebi ser um metodo falho e que trazia riscos
  // coloquei então um map, para ele fazer o mapeamento do meu parametro e retornar todos em um unico array em forma de strings
  // e utilizei do join para tirar a separação por "," dessas strings e assim os transformando em uma string gigante sem esta separada por ","
  //basicamente falando para o join() junte tudo usando nada como separador
  // o navegado agora so trabalha "uma vez" agora inves de antes onde ele sempre se reconstruia sempre que era chamado
  const htmlCards = biblioteca
    .map(
      capa => `<div class="novel-title relative group inline-block break-words mx-auto my-5" data-title="${capa.titulo}">
      <img class="overflow-hidden transition-all duration-300 transform group-hover:cursor-pointer object-cover object-center my-5 h-auto w-52 rounded-md group-hover:scale-125" src="${capa.capa}" alt="${capa.titulo}" id="imgModal"> 
      <div class="overflow-hidden transition-all opacity-0 absolute top-35 rounded-md w-auto font-extraboldbold text-2xl bg-white/50 text-black  group-hover:opacity-100 group-hover:cursor-pointer">${capa.titulo}</div>
    </div>
    `,
    )
    .join("");

  cardsNovels.innerHTML = htmlCards;
}
//Rodar a função junto ao localstorage para deixar o que foi pesquisado anteriormente la e sendo salvo tbm o resultado dessa pesquisa no html
listaCards(topNovelsPorTitulo(tituloSalvo));

//DOM

//Crio uma ação de evento de click para quando clicar no svg o tema do site mudar
switchTheme.addEventListener("click", () => {
  //esse comando faz acrescentar o "dark" direto no html
  const isDark = document.documentElement.classList.toggle("dark");

  //Verifica se o tema isDark esta no html, se sim, ele salva ele e deixa salvo se não, ele coloca o light no localStorage assim o deixando salvo
  localStorage.setItem("tema", isDark ? "dark" : "light");
});

//Crio um evento de input, que basicamente vai registrar tudo o que o usuario fazer no campo de pesquisa
resultado.addEventListener("input", e => {
  //Coloco um console.log para confirmar se esta pegando o valor
  //console.log(e.target.value);

  //criar a constante campoDigitado que vai receber o valor do que sera digitado na barra de pesquisa
  const campoDigitado = e.currentTarget.value;

  //O que esta sendo digitado vai entrar dentro da função topNovelsPorTitulo para ser exibido no html atraves da função listaCards
  listaCards(topNovelsPorTitulo(campoDigitado));

  //salvar o valor dando uma chave e a variavel campoDigitado pois ela recebe a string(valor) da barra de pesquisa
  localStorage.setItem("campo", campoDigitado);
});

//cria um evento para pegar a div clicada e puxar até o elemento pai que tem a class(novel-title)
cardsNovels.addEventListener("click", e => {
  //cria uma variavel para esse (novel-title)
  const divNovel = e.target.closest(".novel-title");
  //cria uma condicional onde se for divNovel, cria-se a constante que pega o dataset de divNovel e abre o modal
  if (divNovel) {
    const tituloNovel = buscarNovel(divNovel.dataset.title);
    //console.log(tituloNovel);
    window.location.href = `detalhes.html?title=${encodeURIComponent(divNovel.dataset.title)}`;
  }
});
