const numeroAleatorio = (min,max) =>{
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}

let opcao = 0

while (opcao != 1){
    opcao = numeroAleatorio(1, 10);
    console.log(`O número selecionado foi ${opcao}!!`)
}

console.log("Acabou")

// A estrutura de repetição While é própria para executar uma repetição que tenha uma quantidade indeterminada de ações.