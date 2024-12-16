// Factory -> é uma função que retorna um objeto
// Factory simples

function aluno (){
    return {
        nome: 'Ítalo',
        sobrenome: 'Cézar',
        idade: 21 ,
        altura: 1.83
    }
}

console.log(aluno());

function produto (nome,valor) {
    return {
        nome,
        valor,
        desconto: 0.1
    }
}

console.log(produto('atum',3.50));

// Class VS Factory

class Pessoa {
    constructor (nome){
        this. nome = nome
    }

    falar (){
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa ('ítalo')
p1.falar()


// Utilizando o factory eu não preciso utilizar o "this"
const criarPessoa = (nome) =>{
    return{
        falar: () => {console.log(`Meu Deus que doideira é essa, ${nome}`)}
    }
}

const p2 = criarPessoa('Jesus');
p2.falar()