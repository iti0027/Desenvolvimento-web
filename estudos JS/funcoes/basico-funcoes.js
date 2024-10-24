// Criar função literal
function fun1(c) {
    console.log(`testando função 1 ${c}`)
 }

/* A função em JS pode retornar um valor ou não, caso não pessa explicitamente para retornar um valor usando "return" vai voltar como undefined.
* console.log(typeof(fun1())); --- voltou como undefined */

// Armazenar função em uma variável
const fun2 = function (d){
    console.log(`testando função 2 ${d}`)
}

/*
Nesse caso estou criando uma função sem nome. Pra chamar ela basta chamar a constante com parênteses.
fun2()
*/

// Armazenar em um array
const array = [function (a,b) {return a + b}, fun1, fun2]

/*
 Nesse método eu criei uma função sem nome com os parâmetros a,b e pedi para retornar a + b e chamei a função fun1 e a função que esta dentro da constante fun2

 vou chamar cada função
*/
console.log(array[0](4,6));
console.log(array[1]("teste"));
console.log(array[2]("teste"));

// Armazenar em um atributo de objeto
const obj = {}
obj.falar = function (){
    return "Falei to leve"
}
console.log(obj.falar());

/*
 * Aqui eu criei uma const obj sendo um objeto e designie um nome para esse objeto que seria "falar".
 * Dentro do obj.falar eu criei uma função sem parâmetro que vai ter um return.
 */

// passando uma função como parâmetro
function run (fun){
    fun()
}
run (function(){console.log("testando...")})
/*
    criei uma função run e dei como parâmentro outra função que se chama fun e depois chamei a função "run" e pedi para aparecer a palavra testando... dentro da função "fun()"
*/

// uma função pode retornar/conter outra função
function soma(a,b){
    return function(c){
        console.log(a + b + c)
    }
}
soma(2,3)(7)

/*
 Aqui eu criei uma função soma com dois parâmetros e pedi para retornar uma outra função sem nome com o parâmetro c. Dentro dessa função sem nome que informei qual seria a ação final que no caso é somar os parâmetros.
 */