const resultado = (nota) =>{
    switch (Math.floor(nota)){
        case 10:
        case 9:
            console.log('Quadro de Honra.');
            break
        case 8:
        case 7:
            console.log('Aprovado');
            break
        case 6:
        case 5:
            console.log('Recuperação')
            break
        case 4: case 3: case 2: case 1: case 0:
            console.log('Reprovado')
            break
        default:
            console.log('Nota inválida')
    } 
}
console.log(resultado(-2));

// O uso do switch é muito semelhante ao if, else if e else. Contudo, sempre que colocarmos para executar um ação, é necessário colocar um break para ele sair desse laço, caso contrário, ele vai percorrer todo o laço até chegar no "default" que é como se fosse o else.

// Mas o switch não vai retornar um valor verdadeiro ou falso e e não colocar um break, ele vai executar tudo que esteja abaixo do selecionado.