// Alguns exemplos do laço for

for (let i = 1; i <= 10;i++){
    console.log(`i = ${i}`);
};

const notas = [2,4,6,8,10]

for (let i = 0; i < notas.length; i++){
    console.log(`A nota é ${notas[i]}`)
};

// for in
// O uso do for in vai te fornecer os index dos valores.

const valores = [5.5,7.7,3.3,6.6,2.2];

for (i in valores){
    console.log(i, valores[i]);
}

// é interessante usar o for in em objetos, mas não tão interessante com array porque tem mais interessantes.
const pessoa = {
    nome: 'ítalo',
    sobrenome: 'Cézar',
    idade: 21,
    peso: 82,
};

for (atributos in pessoa){
    console.log(`${atributos} = ${pessoa[atributos]}`);
}