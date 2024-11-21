// Caso eu crie uma variável dentro de uma função, ela sera privada
// Mas se eu utilizar "this." vai tornar aquele elemento em pública
function usuario (){
    let nome = 'ítalo';
    let numero = Math.floor((Math.random() * 100) + 1);
    let idade = numero;

    console.log(numero);

    if (idade >= 18 && idade <= 75){
        console.log(`Olá, ${nome}! Você tem o direito e dever como cidadão de expressar o seu sentimento através do voto.`)
    } else if( idade < 18 && idade >= 16){
        console.log(`Olá, ${nome}! Você é muito novo para votar,mas pode tirar o seu título de eleitor e votar.`)
    } else if( idade < 16){
        console.log(`Olá, ${nome}! Você é muito novo para votar, aguarde mais uns anos até ficar maior de idade`)
    } else{
        console.log(`Obrigado ${nome}! Você compriu com o seu dever como cidação e não precisa mais votar.`)
    }
}

console.log(usuario());
