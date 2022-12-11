let temDinheiro = false;
let estaEnsolarado = true;
let carroEstaNaGaragem = false;

let resultadoE = '#1 (AND) - Vai pro Shopping? ';
resultadoE += temDinheiro && estaEnsolarado;
console.log(resultadoE);

let resultadoOU = '#2 - (OR) vai pro shopping? ';
resultadoOU += estaEnsolarado || carroEstaNaGaragem;
console.log(resultadoOU);
