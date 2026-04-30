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
  {
    titulo: "Lord Xue Ying",
    genero: "Xuanhuan/Ação/Aventura/Cultivo",
    notas: 8.1,
    autor: "I Eat Tomatoes",
    Volumes: 40,
    status: "Concluido",
  },
];

// Aprendendo e criando uma function que utiliza o metodo sort() e tambem o Spread Operator para imutabilidade

function sortNovels() {
  // Criamos a função
  const nota = [...bibliotecaNovels].sort((a, b) => b.notas - a.notas);
  //Criamos a variavel "nota" que vai ser o resultado do metodo sort() do array e vai fazer o calculo pegando "a/b" para ver em cada elemento dos objetos qual é maior e assim fazer a enumeração
  // Usei o Spread Operator (...) que cria basicamente uma "copia" do meu array espalhando os elementos para usar o metodo sort() mas, quando eu chamo o array fora da função ele esta de volta a sua "forma original" e não por essa "copia ordenada",
  // assim preservando a imutabilidade do array "original"
  return nota;
  // Aqui retornamos a variavel nota depois de fazermos o calculo
}

//console.log(sortNovels());
// Exibimos os dados no console executando a função

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
//console.log(hashNovels["Lord Xue Ying"].autor);

// Function utilizando o metodo filter()

function filtrarNovelsEmAndamento() {
  let statusNovel = bibliotecaNovels.filter(
    // Crio uma variavel e defino ela sendo o resultado do metodo filter() para o array de objetos
    state => state.status === "Em andamento",
    // Coloquei para fazer aplicação de filtro em um caso especifico nos status da novel que é "Em andamento", assim todas os objetos que tiverem esse status
    // irão etornar aqui com suas respectivas informações
  );
  return statusNovel; // retorno do variavel
}

//exibição atraves do console.log()
console.log(filtrarNovelsEmAndamento());
