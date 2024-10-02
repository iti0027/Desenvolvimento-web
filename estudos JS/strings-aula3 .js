// Algumas ações interessantes que podemos fazer com as strings
let estudo = "JavaScript"

// Uso da ação "charAt" vai mostrar exatamente a letra que você escolher como index dentro dos ()
console.log(estudo.charAt(4));
console.log(estudo.charAt(9));

// Uso da ação "substring" vai remover o index escolhido e continuar dali em diante.
// Nesse caso como escolhi o número 1, ele retirou o "J"
console.log(estudo.substring(1));

// Aqui eu pedi para retirar o número 1 "J" e parar até o número 8 "i" sem escrever do p em diante.
console.log(estudo.substring(1, 8));

// Usamos ação .concat para concatenar as strings
console.log('Eu estou estudando'.concat(estudo).concat('!'));

// Uso da ação .replace para mudar algo
console.log(estudo.replace('a', '@'));

// Podemos usar a ação .split para quebrar uma string e transforma em um array
console.log('Ítalo, Marcio, Fabiana'.split(',')) // tudo que tiver depois da "," é um item específico de um array