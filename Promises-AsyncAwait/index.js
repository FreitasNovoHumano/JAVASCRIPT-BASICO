/**
 * Implementação de funções
 */
function pedirBolo() {
  console.log(`Pedindo bolo...`);
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      console.log(`Fazendo bolo...`);
      resolve(`Bolo de chocolate`);
    }, 1000);
  });
}

function festejar(bolo) {
  console.log(`Fazendo festa com ` + bolo);
}

async function preparaFesta() {
  // Encomendar bolo (chamando a função)
  // pedirBolo();
  // let bolo = pedirBolo();
  // THEN executa após promess cumpri
  //pedirBolo().then(function (bolo) {
  // Fazer a festa (festejar - chamamdo a função)
  // festejar(bolo);
  //});

  let bolo = await pedirBolo();
  // Fazer a festa (festejar)
  festejar(bolo);
}

function trabalhar() {
  console.log(`Trabalhanando...`);
}

function Treinar() {
  console.log(`Treinando...`);
}

function Viajar() {
  console.log(`Viajando...`);
}

/**
 * IChamada de funções / Execução programa
 */

// Preparar a festa
let bolo = preparaFesta();

// Trabalhar
trabalhar();

// Treinar
Treinar();

// Viajar
Viajar();
