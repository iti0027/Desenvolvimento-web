/* Podemos designar se algo é verdadeiro ou falso escrevendo
false ou true, mas também com a mesma lógica da matemática
onde - com - é + e - com + é -*/
let testeTouF = false
console.log(testeTouF);
testeTouF = true
console.log(testeTouF);
testeTouF = 1
console.log(!!testeTouF)

console.log('Resultados que são verdadeiros');
console.log(!!-1);
console.log(!!3);
console.log(!!' ');
console.log(!!'texto');
console.log(!![]);
console.log(!!{});
console.log(!! Infinity);

console.log('Resultados que são falsos');
console.log(!!0);
console.log(!!'');
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);

// Podemos usar o || (ou) quando queremos deixar um campo e se esse campo não tiver uma resposta, designar uma resposta automática para o campo.
let nome = ''
console.log(nome || 'Desconhecido')
/*Excplicação: se não tiver nada na variável ${nome} escreva a palavra 'Desconhecido' */