// definir o valor padão com o es2015
function soma (a = 1,b = 1,c = 1){
    return a + b + c
};
console.log(soma()), console.log(soma(3)), console.log(soma(1,2,3)), console.log(soma(0,0,0));

// esse exemplo serve para parâmetros de uma função, mas se você quiser deixar um valor padrão para uma variável dentro de uma função, esse é o exemplo mais comum

function soma1(a,b,c){
    a = a || 1
    b = b || 1
    c = c || 1
};