//database com array de objetos
const livros = [
  {
    id: 1,
    nome: "Digital Minimalism",
    autor: "Cal Newport",
    categoria: "Produtividade",
    paginas: 254,
    recomenda: false,
    leu: false,
  },
  {
    id: 2,
    nome: "O Genocídio do negro brasileiro",
    autor: "Abdias do Nascimento",
    categoria: "História brasileira",
    paginas: 400,
    recomenda: false,
    leu: false,
  },
  {
    id: 3,
    nome: "Diário de um Mago",
    autor: "Paulo Coelho",
    categoria: "História",
    paginas: 254,
    recomenda: false,
    leu: false,
  },
  {
    id: 4,
    nome: "Scrum",
    autor: "Jef Santerland",
    categoria: "Produtividade",
    paginas: 282,
    recomenda: false,
    leu: false,
  },
  {
    id: 5,
    nome: "DNA da Cocriação",
    autor: "Elainne Ourives",
    categoria: "Tecnologia",
    paginas: 279,
    recomenda: true,
    leu: true,
  },
  {
    id: 6,
    nome: "DNA Milionário",
    autor: "Elainne Ourives",
    categoria: "Tecnologia",
    paginas: 227,
    recomenda: true,
    leu: true,
  },
];

//Exportando os livros
module.exports = livros;
