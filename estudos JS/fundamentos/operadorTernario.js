// Operadores ternários são aqueles que tem uma acha e duas condições envolvendo aquela ação.
// estrutura -> variável (condição) ? 'opção1' : 'opção2'
const resultado = (nota) => nota >= 7 ? 'Aprovado' : 'Reprovado'
console.log(resultado(7));
console.log(resultado(5));

// também pode ser assim

const resultado2 = (nota2) => {
    return nota2 >= 7 ? 'aprovado' : 'reprovado'
}
console.log(resultado2(3));
console.log(resultado2(8));