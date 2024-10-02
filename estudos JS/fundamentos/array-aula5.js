// array em JavaScript não tem um tamanho específico.
// array é uma constante ou variável com vários valores distintos.
const valores = [5,8,13,18];
console.log(valores[1], valores[3]);
// caso eu chame o index do array que não foi designado, vai dar como indefinido
console.log(valores[7]);

// posso add valores ao array
valores[4] = 23
console.log(valores);
// Consigo ver o tamanho do array usando .length
console.log(valores.length);

// podemos adicionar algo no array usando a ação .push
valores.push({nome:"Ítalo"}, 'exemplo', null, 54)
console.log(valores);
console.log(valores.length);
/*como JS é de tipagem fraca, podemos colocar diversos tipos no array como strings, numeros, booleans e outros */

// Podemos chamar o ultimo item do array e retirar esse mesmo item do array
console.log(valores.pop());
console.log(valores);

// podeos deletar algum item do array usando o delete
delete valores[7]
console.log(valores);