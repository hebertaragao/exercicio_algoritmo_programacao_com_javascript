function sempreRetornaUm(){
    return 1;
}
let valor1 = sempreRetornaUm();
console.log(valor1)

function textoOuNumero(retornaTexto){
    if(retornaTexto){
        return "Sou um texto!"
    }else{
        return 123;
    }
}
let texto = textoOuNumero(true);
console.log(texto)
console.log(textoOuNumero(false))