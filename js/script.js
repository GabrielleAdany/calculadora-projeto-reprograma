console.log("Olá Analu, bem-vinda ao meu projeto - calculadora Freelancer")

var inputSalario = document.querySelector("#ganho-mes")
// console.log(inputSalario)

var inputHora = document.querySelector("#horas-dia")
// console.log(inputHora)

var resultado = document.querySelector("#resposta")

function calcularValorHora() {
    var salario = inputSalario.valueAsNumber
    //console.log(salario)

    var horas = inputHora.valueAsNumber
    //console.log(horas)

    var horasMes = horas * 22
    var valorHora = salario / horasMes

    // console.log(valorHora)

    var valorDuasCasas = valorHora.toFixed(2)

    console.log(valorDuasCasas)
    // console.log(resultado)

    resultado.textContent = ("R$ " + valorDuasCasas)

}