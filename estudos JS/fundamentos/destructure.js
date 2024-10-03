// O método destructure é literalmente pegar os valores específicos de deseja e mostrar de maneira "isolada"

// Nesse exemplo estou utilizando um objeto que seria um valor e seu preço.

const pessoa = {
    nome: 'ítalo',
    idade: 21,
    endereco: {
        logadouro: 'Rua Pedro melo',
        numero: 185
    }
}

// Primeiro temos que criar os valores do objeto, após isso, só chamalos de maneira isolada.

// PS: Para utilizarmos o destructure criamos uma const/ let e inserimos o que desejamos chamar dentro de {} = ao nome da const/let

const {nome, idade} = pessoa
console.log(nome,idade);

// também podemos dar nomes próprios a esses valores já existentes

const {nome: n, idade: i} = pessoa
console.log(n,i);

// se chamarmos algum valor que não foi designado antes, vai dar como undefined.

const {sexo, endereco} = pessoa // note que sexo não foi definido no objeto, logo, vai aparecer como undefined.
console.log(sexo, endereco);

const {nascimento = true} = pessoa
console.log(nascimento) // note que nascimento não foi definido no objeto, mas define como true por fora e o JS entendeu.

/*
function rand ({min = 0, max = 10}) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor);
}

console.log(rand({})); */

function rand ({min = 0, max = 10}){
    const value = Math.random() * (max - min) + min
    return Math.floor(value);
}

console.log(rand({min: 5}))