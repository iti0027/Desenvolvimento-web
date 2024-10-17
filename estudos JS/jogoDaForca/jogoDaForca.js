const palavras = [
    "abacaxi", "amarelo", "amigo", "abacate", "antena",
    "bola", "bala", "banana", "bicicleta", "borboleta",
    "cachorro", "cadeira", "carro", "caderno", "caminhao",
    "dado", "dinossauro", "doce", "dentista", "diamante",
    "elefante", "escola", "estrela", "escada", "esmalte",
    "fogo", "futebol", "faca", "folha", "farol",
    "guitarra", "gato", "golfinho", "garrafa", "grama",
    "helicoptero", "hipopotamo", "historia", "hotel", "horta",
    "igreja", "ilha", "inseto", "ima", "internet",
    "jacare", "jornal", "janela", "joaninha", "jogo",
    "kiwi", "karaoke", "ketchup", "kimono", "kombi",
    "limao", "livro", "leao", "lapis", "lanterna",
    "montanha", "morango", "macaco", "mesa", "maquina",
    "navio", "noite", "nuvem", "ninho", "nariz",
    "oculos", "ovo", "orquidea", "ovelha", "onibus",
    "pato", "pao", "pedra", "peixe", "pipoca",
    "quadro", "queijo", "quentao", "quintal", "quebra-cabeça",
    "roda", "raposa", "relogio", "rato", "rainha",
    "sapato", "sol", "sapo", "sabao", "salada",
    "tigre", "tartaruga", "trem", "telefone", "tapete",
    "urso", "uva", "universo", "umbigo", "uniforme",
    "vaca", "violao", "ventilador", "vulcao", "vassoura",
    "xadrez", "xarope", "xicara", "xampu", "xerox",
    "yakisoba", "yoga", "youtuber", "yamaha", "yeti",
    "zebra", "zangao", "zumbi", "ziper", "zoologico"
  ];
  
let letras = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

let palavraAleatoria = document.getElementById('idPalavraAleatoria');
let forcaButoens = document.getElementById('idForcaButoens');
let forca = document.getElementById('idforca');
let mostrarLetras = document.getElementById('idMostrarLetras');


function gerarPalavra (){
    palavraAleatoria = Math.random() * palavras.length;
    return palavras[palavraAleatoria];
}

function comecarJogo (){
    mostrarLetras = 
}