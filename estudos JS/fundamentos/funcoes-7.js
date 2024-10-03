// Armazenando uma função em uma variável ou constante
const matricula = function(nome,idade,matriculaId, sexo){
    console.log(`Seu nome é ${nome}, sua idade é ${idade}, sua matricula é ${matriculaId} e seu sexo é ${sexo}`);
}

matricula('ítalo', 21, '00000854140', 'masculino');

// armazenando uma função arrow em uma variável
const media = (a,b,c) =>{
    return (a + b) / c;
}
console.log(media(12,8,2));


// function "function (){}" e arrow function "() => {}" é a mesma coisa, a diferença é que a arrow function esta simplificada, mas ambos recebem os parâmetros e tem como {} o objeto.

 const idade = () => {
    let age = 5 
    if (age <= 18){
        console.log('Você é menor de idade');
    } else{
        console.log('Você é maior de idade');
    }
}

idade();