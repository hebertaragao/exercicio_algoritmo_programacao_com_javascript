const produto = {
nome: 'Ipad',
preco: 5600,
desconto: 0.15,
precoFinal: function(){
return this.preco * (1 - this.desconto);
}
};

console.log(produto.nome);
console.log(produto.precoFinal());