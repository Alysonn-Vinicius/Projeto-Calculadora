let areaDigitar = document.querySelector('.areaResult span');
let numero1 = "";
let numero2 = "";
let operacao = null;
const c = (el) => document.querySelector(el);

document.querySelectorAll('.numero').forEach((teclaN) => teclaN.addEventListener('click', (e) => {
    let numeroEl = e.currentTarget.getAttribute('data-key');


    if (operacao === null) {
        numero1 += numeroEl;
        areaDigitar.innerHTML = numero1;
    } else {
        numero2 += numeroEl;
        areaDigitar.innerHTML = numero2;
    }


}));

//events

//operacoes
c('.soma').addEventListener('click', () => {
    operacao = "soma";
})
c('.subtrair').addEventListener('click', () => {
    operacao = "subtrair";
})
c('.multiplicacao').addEventListener('click', () => {
    operacao = "multiplicacao";
})
c('.divisao').addEventListener('click', () => {
    operacao = "divisao";
})

//event limpar
c('.limpar').addEventListener('click', () => {

    operacao = null;
    numero1 = "";
    numero2 = "";
    areaDigitar.innerHTML = "";
})

c('.igual').addEventListener('click', () => {

    if(numero1 === "" || numero2 === "") return; //nao funciona com numero vazio
    switch (operacao) {
        case "soma":
            soma();
            break;
        case "subtrair":
            subtrair();
            break;
        case "multiplicacao":
            multiplicacao();
            break;
        case "divisao":
            divisao();
            break;
    }

});

//functions 
function soma(n1, n2) {
    n1 = Number(numero1);
    n2 = Number(numero2);


    let resultado = n1 + n2;
    let somaEl = `${numero1} + ${numero2} = ${resultado}`
    areaDigitar.innerHTML = somaEl;


    //caso queria continaur mcom o resultao
    numero1 = resultado;
    numero2 = ""
    operacao = null;
}

function subtrair(n1, n2) {
    n1 = Number(numero1);
    n2 = Number(numero2);

    let resultado = n1 - n2;
    let subtrairEl = `${numero1} - ${numero2} = ${resultado}`
    areaDigitar.innerHTML = subtrairEl;

    //caso queria continaur mcom o resultao
    numero1 = resultado;
    numero2 = ""
    operacao = null;

}

function multiplicacao(n1, n2) {
    n1 = Number(numero1);
    n2 = Number(numero2);


    let resultado = n1 * n2;
    let multiEl = `${numero1} x ${numero2} = ${resultado}`;
    areaDigitar.innerHTML = multiEl;

    //caso queria continaur mcom o resultao
    numero1 = resultado;
    numero2 = ""
    operacao = null;
}

function divisao(n1, n2) {
    n1 = Number(numero1);
    n2 = Number(numero2);

    if(n2 === 0){
        areaDigitar.innerHTML = "Erro";
        return;
    }

    let resultado = (n1 / n2).toFixed(4);
    let divisaoEl = `${numero1} ÷ ${numero2} = ${resultado}`;
    areaDigitar.innerHTML = divisaoEl;

    //caso queria continaur mcom o resultao
    numero1 = resultado;
    numero2 = ""
    operacao = null;
}

