const aluno = {
    matricula : '00000854140',
    nome : 'Ítalo',
    turno: 'Noite',
    resultado () {
        console.log(`O aluno tem a mátricula ${this.matricula}, seu nome é ${this.nome} e seu turno é ${this.turno}`)
    }
}
aluno.resultado();

// Agora quando tentamos associsar uma const para receber o valor do objeto ele da um erro
const chamando = aluno.resultado
console.log(chamando);

// Mas podemos usar o bind para associar o this á essa const.
const chamandoComBind = aluno.resultado.bind(aluno)
chamandoComBind();

// o método bind vai prender o que eu tiver associado ao this