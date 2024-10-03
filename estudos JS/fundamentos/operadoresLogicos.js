function compras (trabalho1,trabalho2){
    const tomarSorvete = trabalho1 || trabalho2;
    const comprarTV50 = trabalho1 && trabalho2;
    const comprarTV32 = trabalho1 != trabalho2;
    const pobre = !tomarSorvete;

    return {tomarSorvete, comprarTV50, comprarTV32,pobre}
}

console.log(compras(true, true));
console.log(compras(true, false));
console.log(compras(false, true));
console.log(compras(false, false));

/*Nesse exemplo, para eu conseguir comprar uma tv de 50 precisaria que o trabalho1 e trabalho2 desse certo, caso só um desse certo eu iria tomar sorvete e comprar uma tv de 32 e se nenhum desse certo eu continuaria pobre. */

