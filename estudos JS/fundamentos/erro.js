// introdução sobre try, catch and throw

// usamos o try para códigos que possam ocasionar em algum erro e quando o error acontecer vai cair no catch. Após pegar o erro com o catch, joga uma menssagem de erro com o throw.
function tratarErroELancar (erro){
    console.log('Erro no sistema.');
}

function imprimirNomeGritando (obj){
    try{
        console.log(obj.nome.toUpperCase() + "!!!");
    } catch (e) {
        tratarErroELancar(e);
    } finally{
        console.log('Conseguiu chegar no final');
    }
}

const obj = {nome: 'ítalo'}
imprimirNomeGritando(obj)

/*
- no try eu coloquei o que a função deveria fazer
- caso desse errado o try, iria cair no catch que dentro tem uma função
- e nessa função iria jogar uma mensagem de erro ao usuário
- por fim, usei o finally para passar uma mensagem final não importando de o código deu erro ou não.
*/