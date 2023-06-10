const pessoa = {
  nome: "Fábio",
  idade: 40,
  cidade: "Belo Horizonte",
};

//Notação de ponto
console.log(pessoa.nome); //"Fábio"

//Notação de colchetes
console.log(pessoa["idade"]); //40

//como desestruturar Objetos (Destructuring)
const { nome, idade, cidade } = pessoa;
console.log(nome);
console.log(idade);
console.log(cidade);

//Objetos2
const filmes = [
  {
    id: 1,
    titulo: "Dilema de Redes",
    descricao: "Um documentario sobre tecnologia.",
    duracao: 120,
  },
  {
    id: 2,
    titulo: "Corra",
    descricao: "Um filme de suspense bem legal.",
    duracao: 120,
  },
  {
    id: 3,
    titulo: "Us",
    descricao: "Um filme de terror legal demais.",
    duracao: 120,
  },
];

const [{ id, titulo, descricao, duracao }] = filmes;
console.log(titulo); //trás o primeiro titulo
filmes.map((filme) => console.log(filme.descricao)); // trás cada descrição
