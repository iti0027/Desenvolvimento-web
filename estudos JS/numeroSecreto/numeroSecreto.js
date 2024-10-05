const nome = window.prompt('Olá, bem vindo! Digite o seu nome: ')
const numeroInserido = document.querySelector('#idnumInsert');
let resposta = document.querySelector('#resposta');

let numeroMaximo = 100;
let tentativas = 1;
let numeroAleatorio = gerarNumero();


function verificarNumero (){
    let chute = Number(numeroInserido.value);

    if (isNaN(chute)){
        resposta.innerHTML = 'Por favor, inserir um número válido.'
        return;
    }

    if (chute == numeroAleatorio){
        resposta.innerHTML = `Parabéns, ${nome}! Você acertou o número secrecro.`
        document.getElementById('reiniciar').removeAttribute('disabled')
    } else{
        if (chute < numeroAleatorio){
            resposta.innerHTML = `Não foi dessa vez <strong>${nome}</strong>. O número que você escolheu "${chute}" é <strong>menor</strong> do que o número secreto.`
        } else{
            resposta.innerHTML = `Não foi dessa vez <strong>${nome}</strong>. O número que você escolheu "${chute}" é <strong>maior</strong> do que o número secreto.` 
            tentativas++;
            limparbarrinha();
        }
    }
}

function gerarNumero (){
    const numeroCriado = parseInt(Math.random() * numeroMaximo + 1);
    return numeroCriado;
}

console.log(numeroAleatorio);

function limparbarrinha (){
    numeroInserido.value = '';
}

function tentarNovamente (){
   numeroAleatorio = gerarNumero();
   limparbarrinha();
   tentativas = 1;
   document.getElementById('reiniciar').setAttribute('disabled',true);
}
