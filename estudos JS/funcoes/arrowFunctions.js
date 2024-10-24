// Uma função arrow é sempre anonima. Se eu quiser chamar ela depois preciso armazenar em alguma const.
let dobro = function (a) {
    return a * 2
};

dobro = (a) => {
    return a * 2
};

dobro = a => 2 * a

// as três são funções, sendo as ultimas duas arrow functions e a ultima sendo uma arrow function com apenas um parâmetro.
console.log(dobro(4));

function pessoa () {
    this.idade = 0

    setInterval(() => {
        this.idade ++
        console.log(this.idade)
    },1000)
}

new pessoa
