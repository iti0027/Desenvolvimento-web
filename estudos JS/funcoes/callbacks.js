const doidos = ['italo', 'pedro', 'rebeca'];

function imprimir (nome,indixe){
    console.log(`Os doidos são ${indixe + 1}.${nome}`)
}

doidos.forEach(imprimir)
