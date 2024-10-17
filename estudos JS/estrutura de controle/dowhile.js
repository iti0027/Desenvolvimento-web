// Do While serve para passar pelo menos uma vez por todo o código.

const testando = (min,max) =>{
    valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}
let opcao = 0

do {
    opcao = testando(1,10);
    console.log(`O número selecionado foi ${opcao}`);

} while(opcao != 1)

console.log('Acabou')

// única estrutura que a condição fica depois do bloco e que vai passar pelo menos uma ver por toda a condição.