//Selecionando o id container-comentarios
const containerComentarios = document.getElementById("container-comentarios");

//Colocar o theme aqui tambem
const switchTheme = document.getElementById("theme");

//Pegamos os parametros da barra de endereço
const params = new URLSearchParams(window.location.search);

//Com o .get ele decodifica automaticamente a URL e dvolve o titulo limpo original
const tituloDaUrl = params.get("title");

//Pegar o objeto completo através da hashtable utilizando ja a chave limpa do metodo .get()
const novelEncontrada = buscarNovel(tituloDaUrl);

//Constantes para exibição da pagina
const infoNovel = document.getElementById("infoNovel");

const cardsRecomendados = document.getElementById("bfsCards");

const detalhesImg = document.getElementById("detalhesImg");

const detalhesTitle = document.getElementById("detalhes-title");

//Função para exibição da pagina
const detalhesPagina = dadosNovel => {
  if (dadosNovel) {
    //Criado uma verificação de segurança onde so pode mexer no texto se obter um objeto valido
    detalhesTitle.textContent = dadosNovel.titulo;
    detalhesImg.src = dadosNovel.capa;
    detalhesImg.alt = dadosNovel.title;
    infoNovel.innerHTML = [
      `<div>Titulo: ${dadosNovel.titulo}</div>`,
      `<div>Generos: ${dadosNovel.genero}</div>`,
      `<div>Nota: ${dadosNovel.notas}</div>`,
      `<div>Autor: ${dadosNovel.autor}</div>`,
      `<div>Volumes: ${dadosNovel.volumes}</div>`,
      `<div>Status: ${dadosNovel.status}</div>`,
    ].join("");

    //cria a constante e faz um safety check para evitar que a novel clicada apareça nos recomendados
    const novelsRelacionadas = recomendarNovels(dadosNovel.titulo).filter(
      item => item.titulo !== dadosNovel.titulo,
    );

    //cria a constante que mapeia as novelsRelacionadas e cria uma div contendo a imagem e titulo de cada novel recomendada e o join faz disso uma "string gigante"
    const cardRelacionados = novelsRelacionadas
      .map(
        relacionados =>
          `
      <div class="novel-title relative group inline-block break-words mx-5 my-10 mb-10 md:mx-20">
      <div class="transition-all absolute opacity-0 left-5 rounded-md w-auto break-words font-extraboldbold text-xl bg-white/50 text-black  group-hover:opacity-100 group-hover:cursor-pointer">${relacionados.titulo}</div>
      <img class="w-40 h-44 object-cover object-center mx-auto ml-5 rounded-md group-hover:cursor-pointer sm:w-48 md:h-auto" src="${relacionados.capa}" alt="${relacionados.titulo}">
      </div>
      `,
      )
      .join("");

    //injeta no html as divs das novels recomendadas
    cardsRecomendados.innerHTML = cardRelacionados;
  } else {
    detalhesTitle.textContent = `Novel Não encontrada`;
  }
};

detalhesPagina(novelEncontrada);

//localStorage
if (localStorage.getItem("tema") === "dark") {
  document.documentElement.classList.add("dark");
} else {
  document.documentElement.classList.remove("dark");
}

//Crio uma ação de evento de click para quando clicar no svg o tema do site mudar
switchTheme.addEventListener("click", () => {
  //esse comando faz acrescentar o "dark" direto no html
  const isDark = document.documentElement.classList.toggle("dark");

  //Verifica se o tema isDark esta no html, se sim, ele salva ele e deixa salvo se não, ele coloca o light no localStorage assim o deixando salvo
  localStorage.setItem("tema", isDark ? "dark" : "light");
});
