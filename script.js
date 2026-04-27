//Banco de dados feito de forma manual, ainda não aprendi sobre banco de dados de maneira "formal"

let bibliotecaNovels = [
  {
    titulo: "Lord of the Mysteries",
    genero: "Fantasia/Misterios/Steampunk/Sobrenatural",
    notas: 9.89,
    autor: "Cuttlefish That Loves Diving",
    volumes: 8,
    status: "Concluido",
  },

  {
    titulo: "Classroom of the Elite",
    genero: "Psicologico/Escolar/Drama",
    notas: 9,
    autor: "Syougo Kinugasa",
    volumes: 14,
    status: "Em andamento",
  },
  {
    titulo: "That Time I Got Reincarnated as a Slime",
    genero: "Fantasia/Isekai/Aventura",
    notas: 8,
    autor: "Fuse",
    volumes: 20,
    status: "Em andamento",
  },
  {
    titulo: "Alya Sometimes Hides Her Feelings in Russian",
    genero: "Comedia Romantica/Escolar",
    notas: 7.2,
    autor: "Sun Sun Sun",
    volumes: 9,
    status: "Em andamento",
  },
  {
    titulo: "The Apothecary Diaries",
    genero: "Misterio/Historico/Drama",
    notas: 9,
    autor: "Natsu Hyuuga",
    volumes: 16,
    status: "Em andamento",
  },
];

// HASH TABLE - VERSÃO UTILIZANDO UMA FUNÇÃO DE FORMA MAIS SIMPLIFICADA
function hashTable(listaDeNovels) {
  return listaDeNovels.reduce((hashPorTitulo, novelAtual) => {
    //Aqui temos ja o parametro listaDeNovels com o metodo reduce(), o acumulador é o hashPorTitulo e o valor atual é a novelAtual (onde vai passar cada objeto)
    hashPorTitulo[novelAtual.titulo] = novelAtual;
    // A chave para o acumulador vai ser o titulo de novelAtual ou seja, a pesquisa vai ser realizada utilizando ele e retornando o objeto completo

    return hashPorTitulo;
    //Acontece o retorno do acumalador em um objeto novo
  }, {}); //Valor inicial onde vai ser o retorno de hashPorTitulo
}

//Variavel que define a função e o array de objetos como parametro
let hashNovels = hashTable(bibliotecaNovels);

//Retorno de pesquisa para confirmar se funciona
console.log(hashNovels[`Alya Sometimes Hides Her Feelings in Russian`].genero);

/* 

HASH TABLE - VERSÃO SEM UTILIZAR UMA FUNÇÃO

// Variavel para fazer o hash table através da propriedade reduce()
let hashPorTitulo = bibliotecaNovels.reduce((hashPorTitulo, tituloAtual) => {
  //hashPorTitulo = acumulador - tituloAtual = valor atual (onde será percorrido o elemento chave do objeto)
  console.log(tituloAtual.titulo);
  // console.log para fins de teste e exibição
  hashPorTitulo[tituloAtual.titulo] = hashPorTitulo[tituloAtual.titulo];
  // Aqui basicamente como estamos fazendo uma busca de 1 para 1 ou seja, pesquisar um titulo especifico vai retornar apenas ou o titulo em especifico ou vai retornar "nada" pois o titulo não existe,
  // mas se fosse em um retorno de varios resultados com base em uma pesquisa como genero onde tem em varios objetos dai pode-se colocar no comando acima esse "|| []" onde ele ira pegar um array vazio e retornar os resultados e no comando abaixo
  //colocar o comando push para pegar todos os elementos que possuem e retornar eles. Como eu disse se fosse uma pequisa por genero esse metodo citado seria o ideal, mas como é por titulo esse que estou usando funciona
  hashPorTitulo[tituloAtual.titulo] = tituloAtual;

  return hashPorTitulo;
  // depois de tudo retorna o hashPorTitulo já como objeto de hash table através do elemento "titulo" como chave para exibição de todos os elementos daquele objeto
}, {}); // Valor inicial que é aqui onde vai sair o hashPorTitulo

//Exemplo exibido no console.log
console.log(hashPorTitulo[`Lord of the Mysteries`]);

*/

/*
TABELA HASH - estou aprendendo sobre - é bom para fazer pesquisa rapida, a impossibilidade de existir elementos com nomes duplicados,
é bom de caching/memorização dos dados não precisando solicitar do servidor toda hora e é bom em modelar relação entre dois elementos


// Isso seria uma tabela Hash onde teoricamente ficaria mais rapido achar elementos dentro dela, pois como o elemento esta associado a uma string a resposta seria instatanea
let novelsHash = {
  "Lord of the Mysteries": {
    genero: "Fantasia/Misterios/Steampunk/Sobrenatural",
    notas: 9.89,
    autor: "Cuttlefish That Loves Diving",
    volumes: 8,
    status: "Concluido",
  },
  "Classroom of the Elite": {
    genero: "Psicologico/Escolar/Drama",
    notas: 9,
    autor: "Syougo Kinugasa",
    volumes: 14,
    status: "Em andamento",
  },
  "That Time I Got Reincarnated as a Slime": {
    genero: "Fantasia/Isekai/Aventura",
    notas: 8,
    autor: "Fuse",
    volumes: 20,
    status: "Em andamento",
  },
  "Alya Sometimes Hides Her Feelings in Russian": {
    genero: "Comedia Romantica/Escolar",
    notas: 7.2,
    autor: "Sun Sun Sun",
    volumes: 9,
    status: "Em andamento",
  },
  "The Apothecary Diaries": {
    genero: "Misterio/Historico/Drama",
    notas: 9,
    autor: "Natsu Hyuuga",
    volumes: 16,
    status: "Em andamento",
  },
};

// Função para buscar se existe ou não uma novel nessa tabela hash através do nome, se achar retorna algumas informações sobre a novel
function buscar(nomeDaNovel) {
  let novelEncontrada = novelsHash[nomeDaNovel];
  if (novelEncontrada) {
    return `O nome de sua novel é ${nomeDaNovel}, seu autor é ${novelEncontrada.autor} e seu status atual é ${novelEncontrada.status}`;
  } else {
    return `Novel não encontrada no catálogo`;
  }
}

console.log(novelsHash["Classroom of the Elite"].notas);

*/
