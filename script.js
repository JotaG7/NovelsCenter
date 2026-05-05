//Função auxiliar
//Criado a função auxiliar para melhorar a legibilidade do codigo para evitar repetição e ficar de facil manunteção
function aux(texto) {
  return texto.toLocaleLowerCase().trim();
}

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
  {
    titulo: "Reverend Insanity",
    genero: "Xianxia/Fantasia/Ação/Aventura/Reencarnação/Estratégia",
    notas: 9,
    autor: "Gu Zhen Ren",
    volumes: 20,
    status: "Em andamento",
  },
  {
    titulo: "Omniscient Reader's Viewpoint",
    genero: "Ação/Sobrenatural/Drama",
    notas: 9.9,
    autor: "Sing Shong",
    volumes: 5,
    status: "Concluido",
  },
  {
    titulo: "The Beginning After the End",
    genero: "Fantasia/Isekai/Ação",
    notas: 8.5,
    autor: "TurtleMe",
    volumes: 10,
    status: "Em andamento",
  },
  {
    titulo: "Solo Leveling",
    genero: "Ação/Fantasia",
    notas: 9.5,
    autor: "Chugong",
    volumes: 14,
    status: "Concluido",
  },
];

// Aprendendo e criando uma function que utiliza o metodo sort() e tambem o Spread Operator para imutabilidade
function sortNovels() {
  // Criamos a função
  const nota = [...bibliotecaNovels].sort((a, b) => b.notas - a.notas);
  //Criamos a variavel "nota" que vai ser o resultado do metodo sort() do array e vai fazer o calculo pegando "a/b" para ver em cada elemento dos objetos qual é maior e assim fazer a enumeração
  // Usei o Spread Operator (...) que cria basicamente uma "copia" do meu array espalhando os elementos para usar o metodo sort(), mas quando eu chamo o array fora da função ele esta de volta a sua "forma original" e não por essa "copia ordenada",
  // assim preservando a imutabilidade do array "original"
  return nota;
  // Aqui retornamos a variavel nota depois de fazermos o calculo
}

//console.log(sortNovels());
// Exibimos os dados no console executando a função

// HASH TABLE - Versão utilizando o metodo reduce() e tolocalelowercase() para ter normalização de dados e case-Insensitivity na hora da pesquisa
function hashTable(listaDeNovels) {
  return listaDeNovels.reduce((hashPorTitulo, novelAtual) => {
    //Aqui temos ja o parametro listaDeNovels com o metodo reduce(), o acumulador é o hashPorTitulo e o valor atual é a novelAtual (onde vai passar cada objeto)
    const novelTitulo = aux(novelAtual.titulo);
    //Criei uma variavel novelTitulo onde ela recebe o elemento titulo do valor atual de reduce e o converte no diminutivo
    hashPorTitulo[novelTitulo] = novelAtual;
    // A chave para o acumulador vai ser a variavel novelTitulo de novelAtual que esta pegando o elemento e convertendo ele no diminutivo, ou seja,
    // a pesquisa vai ser realizada utilizando ele e retornando o objeto completo

    return hashPorTitulo;
    //Acontece o retorno do acumulador em um objeto novo
  }, {}); //Valor inicial onde vai ser o retorno de hashPorTitulo
}

//Variavel que define a função e o array de objetos como parametro
let hashNovels = hashTable(bibliotecaNovels);

//Função de busca
//Depois de ter o diminutivo na execução do reduce() ele vai ter tbm um diminutivo na função de busca para achar sempre a versão diminutiva que esta na função hash
function buscarNovel(buscaTitulo) {
  return hashNovels[aux(buscaTitulo)];
  //Pegamos a variavel hashNovels e fazemos o processo de busca no diminutivo que esta salvo na tabela hash
}

//Retorno de pesquisa para confirmar se funciona
//console.log(buscarNovel("solo leveling"));

// Function utilizando o metodo filter() mas agora utilizando a pesquisa dinamica onde eu coloco o status que eu quero da novel e ela me retorna todos os resultados

function filtrarPorStatus(statusDesejado) {
  // crio uma função com o parametro "statusDesajado"
  return bibliotecaNovels.filter(
    state => aux(state.status) === aux(statusDesejado),
  );
  //Retorno o array ja aplicado com filter() onde o state.status é o resultado de uma pesquisa sobre o nome especifico que esta no objeto e o resultado é todos os objetos que tenham esse elemento
}

// Resultado exibido no console.log()
//console.log(filtrarPorStatus("em andamento"));

// Criando uma função utilizando tudo que estava aprendendo nos ultimos commits filter(), sort() e um novo slice()
function topNovelsPorGenero(generoDesejado) {
  return (
    bibliotecaNovels
      .filter(gender => {
        //Aqui fizemos uma reformulação no filter para poder colocar a função auxiliar e podermos impedir do codigo quebrar através do ?
        // Criamos uma constante onde ela recebe a "resposta" de se gender.genero existir ou não, se sim, faça o processo padrão, se não, retorna uma string vazia
        const generoLimpo = gender.genero ? aux(gender.genero) : "";
        //após isso nos retornamos a constante com a propriedade includes() e colocando generoDesejado dentro da função auxiliar para se obter a normalização de dados
        return generoLimpo.includes(aux(generoDesejado));
      })
      //utilizo o metodo filter() para retornar novels pelo genero escolhido e acrescento o includes para verificação do genero em meio aos caracteres especiais
      // o "gender.genero?" foi basicamente adicionado para não haver quebra de codigo caso não aja a propriedade genero em algum objeto
      //coloquei o toLowerCase() pois o includes() diferencia maisculo de minusculo e com o toLowerCase() mesmo fazendo a pesquisa colocando o nome em minusculo ele consegue fazer a busca e achar o que pede
      .sort((a, b) => b.notas - a.notas)
      // com o metodo sort() eu faço com que depois da filtragem ele ordene esse filtro da maior para a menor nota
      .slice(0, 3)
    // Com o metedo slice() eu retorno apenas as 3 maiores notas (começa do indice 0 e o fim é no indice 3, mas não o inclui e sim apenas o 0,1 e 2) ja ordenadas
  );
}

//Exibição para o resultado da function topNovelsPorGenero
console.log(topNovelsPorGenero("fantasia"));

//Função CRUD - Create
//Crio a função recebendo os parametros do array de objetos de bibliotecaNovels
function adicionarNovels(titulo, genero, notas, autor, volumes, status) {
  //Crio um objeto novo para receber esses parametros de acordo com os elementos de bibliotecaNovels
  const novaNovel = {
    titulo,
    genero,
    notas,
    autor,
    volumes,
    status,
  };

  //Utilizando push para acrescentar bibliotecaNovels + novaNovel
  bibliotecaNovels.push(novaNovel);

  //Crio uma variavel que vai padronizar a chave Hash pelo titulo e utilizo o toLocaleLowerCase() para a normalização de dados
  const hashKey = aux(titulo);
  hashNovels[hashKey] = novaNovel;
  //Pego novaNovel e atribuo a posição hashKey (que seria o titulo) dentro de hashNovels,
  // ou seja, pegou novaNovel colocou dentro de hashNovels e usou a hashKey como endereço de busca

  //Retorno mostrando o titulo da novel cadastrada e indexada
  return `Novel ${titulo} cadastrada e indexada`;
}

//Faço o acrescento de uma novel nova
console.log(
  adicionarNovels(
    "Overlord",
    "Fantasia/Isekai",
    8.8,
    "Kugane Maruyama",
    16,
    "Em andamento",
  ),
);

//exibição para confirmação dos dados
console.log(buscarNovel("overlord"));

//Exibo essa a bibliotecaNovels ja "atualizada" com o novo objeto
console.log(bibliotecaNovels);
