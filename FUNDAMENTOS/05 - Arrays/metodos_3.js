const numeros = [10, 20, 30, 40, 50, 60];

function praCadaElemento(elemento, indice, array)
{
    console.log(elemento, indice, array);
};

numeros.forEach(praCadaElemento);



numeros.forEach(function(el){
    console.log(el);
})

numeros.forEach(function(_, i){
    console.log(_,i);
})

//for(letn of numeros){
 //   console.log(n);
//}


//for (let i = 0; i < numeros.length; i++) {
//    console.log(numeros[i]);
    
//}