var memoria = []

function teclado(e){
document.querySelector('.resultado').innerHTML+=e;
}
//aparece os valores clicado

function porcetagem(){
    let valor = document.querySelector('.resultado').innerHTML;
    valor = valor/100;
    document.querySelector('.resultado').innerHTML =  valor;
    criarObjeto(valor)
}
//operação de porcentagem

function apagarUm(){
    let letras = document.querySelector('.resultado').innerHTML;
    letras = letras.trim();
    //trim tira o espaço desnecessário 
    let result = letras.split('');
    //split transforma o resultado em array
    result.pop();
    //pop tira ultimo do array
    letras = result.join('');
    //join tira ultimo do array
    document.querySelector('.resultado').innerHTML = letras;
}
//apaga o último valor digitado

function apagarTudo(){
    document.querySelector('.resultado').innerHTML = ''   
}
//apagar tudo os valores clicado

function soma(){
    let valor = document.querySelector('.resultado').innerHTML
    var rusultado = eval(valor)
    memoria.push(rusultado)

    if(valor){
    document.querySelector('.resultado').innerHTML = eval(valor)
    }
    else {
    document.querySelector('.resultado').innerHTML = 'Digite algo'

    }
criarObjeto(rusultado)
//Chama a função e passo para o resultado da soma da calculadora para outra função que conta com restro da calculadora;
}
//soma os valores que é possível de somar pela h1 resultado

let objeto = document.createElement("ol");
objeto.setAttribute("class", "resultMemoria");
objeto.style.width = '100%';
objeto.style.height = 'calc(100vh - 70px)';
objeto.style.textAlign = 'center'
objeto.style.display = 'none';
//crio ol; mas pode cria pelo próprio html.

let g =  1;
//começo da contagem dos registros

function criarObjeto(b){
     objeto.innerHTML+= 
        `<li class="li-p">
           Resultado(${g}): ${b}
        </li>`;
    g++;
    
    document.querySelector('.memoria').appendChild(objeto);
}
//crio objeto li da lista para ol;

document.querySelector('#icon').addEventListener('click', () => {

    if(objeto.style.display == 'none'){
        objeto.style.display = 'flex';
        objeto.style.flexDirection = 'column';
        objeto.style.flexWrap = 'wrap'

    }
    else{
        objeto.style.display = 'none'
    }

})
