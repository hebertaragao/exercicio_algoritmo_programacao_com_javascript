// 1 - Função com parâmetro e com retorno
function somar(a, b){
    return a + b;
}
let resultado = somar(30, 56);
console.log(resultado);
console.log(somar(30, 56));

// 2 - Função com parâmetro e sem retorno
function exibirMultiplicação(a, b){
    console.log(a * b)
}

exibirMultiplicação(10, 21);

// 3 - Função sem parâmetro e com retorno
function retornarDataAtual(){
    return new Date();
}
console.log(retornarDataAtual());

// 4 - Função sem parâmetro e com retorno
function exibirHoraAtual(){
    console.log(new Date().getHours());
}
exibirHoraAtual();