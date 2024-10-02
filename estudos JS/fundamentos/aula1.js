// Testando if e else
var nome = "ítalo Cézar de Aquino Verçoza";
var idade = "21";
const name = nome;
const age = idade;

function habilitacao () {
    if (age <= "18"){
        console.log('Para tirar a habilitação, é necessário ter 18 anos ou mais. NO momento você não tem. Volte quando estiver maior de idade! ')
    } else{
        console.log('Você pode tirar sua habilitalção')
    }
}

habilitacao();

// testando um loop
var real = 0;
function dotacao(){
    for (cotacao = real; cotacao <= 10; cotacao++) {
        console.log(cotacao);
    }
}

dotacao();

// trocando os valores entre variáveis

let a = 5;
let b = 8;

[a,b] = [b,a]
console.log(a);
console.log(b);

