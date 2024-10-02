// Uma parder de {} representa um objeto no JS assim como um [] significa um array.

// podemos definir nomes,valores e etc mesmo em objetos vazios
const produto1 = {}
produto1.nome = 'Redmi Note 12'
produto1.preco = 'R$'.concat(1200)
console.log(produto1);

/*Objeto é um conjunto de pares onde tem o nome e o valor*/

const produto2 = {
    nome: 'Calça Jeans',
    preco: 'R$'.concat(59.90)
}
console.log(produto2);

/*PS: JSON é um formato textual do Objeto, ele é uma coleção de {} e valores. */
// JSON é texto e Objeto é atributos, anotações essas coisas.