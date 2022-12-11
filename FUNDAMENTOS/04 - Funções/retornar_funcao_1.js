function retornar(){
    function bomDia(){
        return "Bom dia";
    }
    return bomDia;
}
const umafuncao = retornar();
console.log(retornar());
console.log(retornar);
console.log(retornar()())
console.log(umafuncao())