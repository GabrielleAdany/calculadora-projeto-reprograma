console.log("Olá {profa} Analu, bem-vinda ao meu projeto - calculadora")
console.log("Me desafiei a deixar o design da página parecido com o da calculadora Freelancer e por isso fiz alguns ajustes, espero que goste ♥")


var inputHora = document.querySelector("#valor-hora")
var inputProjeto = document.querySelector("#horas-projeto")
var resposta = document.querySelector("#resposta")

// console.log(resposta)
// // console.log(inputProjeto)

function calcular() {
    var horas = inputHora.valueAsNumber

    var projeto = inputProjeto.valueAsNumber

    var calculo = horas * projeto

    console.log("Seu valor por projeto é: R$ " + calculo)

    var horasProjeto = calculo.toFixed(2)

    resposta.textContent = ("R$ " + horasProjeto)
}