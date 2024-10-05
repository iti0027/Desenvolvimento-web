Number.prototype.entre = function(inicio, fim){
    return this >= inicio && this <= fim
}

const notaFinal = (nota) => {
    if (nota.entre(9,10)){
        console.log('Aprovado com Honra');
    } else if(nota.entre(7, 8.99)){
        console.log('Aprovado');
    } else if (nota.entre(4, 6,.99)){
        console.log('Recuperação');
    } else if (nota.entre(0, 3.99)){
        console.log('Reprovado');
    } else{
        console.log('Nota inválida');
    }
}

console.log(notaFinal(10));
console.log(notaFinal(8));
console.log(notaFinal(5));
console.log(notaFinal(2));