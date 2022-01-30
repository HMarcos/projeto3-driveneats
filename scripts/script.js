// Variáveis Globais
// Prato
let pratoSelecionado = null;
let precoPratoSelecionado = null;
// Bebida
let bebidaSelecionada = null;
let precoBebidaSelecionada = null;
// Sobremesa
let sobremesaSelecionada = null;
let precoSobremesaSelecionada = null;

/* Seleciona o prato escolhido pelo usuário 
 enquanto desmarca o anterior */
function selecionarPrato(classePrato, tituloPrato, precoPrato) {

    // Recupera o prato selecionado anteriormente
    const pratoAnterior = document.querySelector(".pratos .selecionado");
    if (pratoAnterior !== null) {
        pratoAnterior.classList.remove("selecionado");
        pratoAnterior.querySelector("ion-icon").classList.add("escondido");

    }

    // Adiciona ao prato clicado à classe selecionado
    const prato = document.querySelector("." + classePrato);
    prato.classList.add("selecionado");
    prato.querySelector("ion-icon").classList.remove("escondido");

    // Armazenando o prato e o seu preço
    pratoSelecionado = tituloPrato;
    precoPratoSelecionado = precoPrato;

    // Tentando habilitar o botão para fechar o pedido
    habilitarBotaoFecharPedido();
}

/* Seleciona a bebida escolhida pelo usuário 
 enquanto desmarca a anterior */
function selecionarBebida(classeBebida, tituloBebida, precoBebida) {

    // Recupera a bebida selecionada anteriormente
    const bebidaAnterior = document.querySelector(".bebidas .selecionado");
    if (bebidaAnterior !== null) {
        bebidaAnterior.classList.remove("selecionado");
        bebidaAnterior.querySelector("ion-icon").classList.add("escondido");

    }

    // Adiciona à bebida clicada à classe selecionado
    const bebida = document.querySelector("." + classeBebida);
    bebida.classList.add("selecionado");
    bebida.querySelector("ion-icon").classList.remove("escondido");

    // Armazenando o bebida e o seu preço
    bebidaSelecionada = tituloBebida;
    precoBebidaSelecionada = precoBebida;

    // Tentando habilitar o botão para fechar o pedido
    habilitarBotaoFecharPedido();
}

/* Seleciona a sobremesa escolhida pelo usuário 
 enquanto desmarca a anterior */
function selecionarSobremesa(classeSobremesa, tituloSobremesa, precoSobremesa) {

    // Recupera a bebida selecionada anteriormente
    const sobremesaAnterior = document.querySelector(".sobremesas .selecionado");
    if (sobremesaAnterior !== null) {
        sobremesaAnterior.classList.remove("selecionado");
        sobremesaAnterior.querySelector("ion-icon").classList.add("escondido");

    }

    // Adiciona à bebida clicada à classe selecionado
    const sobremesa = document.querySelector("." + classeSobremesa);
    sobremesa.classList.add("selecionado");
    sobremesa.querySelector("ion-icon").classList.remove("escondido");

    // Armazenando o bebida e o seu preço
    sobremesaSelecionada = tituloSobremesa;
    precoSobremesaSelecionada = precoSobremesa;

    // Tentando habilitar o botão para fechar o pedido
    habilitarBotaoFecharPedido();
}

/*Habilita o botão para fechar o pedido,
  caso as três opções estejam selecionadas.*/
function habilitarBotaoFecharPedido() {
    if ((pratoSelecionado !== null) && 
    (bebidaSelecionada !== null) && 
    (sobremesaSelecionada !== null)) {
        const botaoFecharPedido = document.querySelector(".fechar-pedido__botao");
        botaoFecharPedido.disabled = false;
        botaoFecharPedido.classList.add("tres_opcoes_selecionados");
        botaoFecharPedido.innerHTML = "Fechar pedido";
    }
}

function fecharPedido() {
    alert("Fechando Pedido");
}