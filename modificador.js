function fnCapitalizar(vetor) {
    var modificado = [];

    for(let i in vetor){
        var letraInicial = vetor[i].charAt(0).toLocaleUpperCase();
        var restoTexto = vetor[i].slice(1);
        var resultado = letraInicial+restoTexto;
        modificado[i] = resultado;
    }
    return modificado; 
}
   
function fnOrdenar(vetor){
        return vetor.sort(function (a,b) {
        return a.localeCompare(b);
     });
       
}

function fnCaixaAlta(vetor) {
    var modificado= [];
    for(let i in vetor){
        modificado[i] = vetor[i].toLocaleUpperCase();
    }
    return modificado;
}



export default {
    capitalizar: fnCapitalizar,
    ordenar: fnOrdenar,
    caixaAlta: fnCaixaAlta
};