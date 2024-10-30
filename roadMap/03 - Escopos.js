var global = 'Escopo global';

function escopoFuncao() {
  console.log('escopo de funcao');
  let escopo = 5;
  if (escopo < 5) {
    console.log('escopo de bloco');
  } else {
    console.log('escopo de bloco2');
  }
}

console.log(global);

escopoFuncao();
