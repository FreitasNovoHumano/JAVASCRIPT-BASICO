const alunosGama = ["Fábio", "Alex", "Icaro", "Matheus"];

//Acessando informações num array
console.log(alunosGama[2]); //"Icaro"

//Operador spread (...) trás todos os itens constantes em nosso array sem alterar as informações do array
const alunosXp = [...alunosGama, "Simara"];

console.log(alunosXp);

//Metodos de iteração
for (let i = 0; i < alunosXp.length; i++) {
  console.log(alunosXp[i]);
}

//Metodos de iteração de array
//1- Mao: retorna um novo array sem alterar o array original, criando uma cópia com as alterações que desejamos.
const alunos = ["Fábio", "Alex", "Icaro", "Matheus"];

alunos.map((aluno) => console.log(aluno));

//2- Filter: retorna um novo array com os elementos filtrados.
const numeros = [34, 35, 67, 90, 55, 76];

const numerosImpares = numeros.filter((numero) => numero % 2 != 0);
console.log(numerosImpares);

const numerosPares = numeros.filter((numero) => numero % 2 == 0);
console.log(numerosPares);

//3- find - encontra e retorna o primeiro elemento que achar igual ao elemento passado por parâmetro.
const produtos = ["geladeira", "fogao", "cama", "mesa"];

const encontraFogao = produtos.find((produto) => produto === "fogao");
console.log(encontraFogao);

const encontraCama = produtos.find((produto) => produto === "cama");
console.log(encontraCama);

//4- sort - ordena o array.
const num = [34, 45, 76, 90, 55, 110];

const crescente = num.sort((a, b) => a - b); //arrow functio ordena os num
console.log(crescente);

const decrescente = num.sort((a, b) => b - a); //ordena de forma decrescente
console.log(decrescente);

//5- reduce - reduz nosso array a um resultado de uma operação matemática.
const numbers = [1, 34, 35]; //retorna 70

const soma = numbers.reduce((valorAnterior, valorAtual) => {
  return valorAnterior + valorAtual;
});
console.log(soma);
