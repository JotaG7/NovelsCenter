//Banco de dados feito de forma manual, ainda não aprendi sobre banco de dados de maneira "formal"

/*
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

console.log(bibliotecaNovels);

*/

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
