const cliente = {

    codigo: 16532,
    nome: 'Ana',
    vip: true,
    endereco: {
        logadouro: 'Rua ABC',
        numero: 123,
        complemento: 'Apto 101, Bloco B',
        pontoReferencia: [
            {nome: 'hospital x', muitoproximo: true},
            { nome: 'shopping y', muitoproximo: false},
        ]
    },
    nomefilhos: ['Bia', 'Carlos', 'Gabriel']
};

console.log(cliente['endereco']['logadouro']);
console.log(cliente.endereco.logadouro);
console.log(cliente.endereco.pontoReferencia[0].muitoproximo);