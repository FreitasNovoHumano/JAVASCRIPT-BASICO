//Algoritimo que recebe três notas de um aluno, calcula sua média e mostre
// - Se a media for igual ou maior que 7 - Aprovado
// - Se a media for maior e igual a cinco e menor que 7 - Recuperação
// - Se a media for menor que 5 - Reprovado

function calcuçaMedia(nota1, nota2, nota3) {
  let media = (nota1 + nota2 + nota3) / 3;

  if (media >= 7) {
    return "Aprovado";
  }

  if (media >= 5 && media < 7) {
    return "Recuperação";
  }

  if (media < 5) {
    return "Reprovado";
  }
}

console.log(calculaMeia(8, 5, 8));
