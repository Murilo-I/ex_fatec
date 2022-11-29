function findEven() {
  even = document.querySelector("#even").value;
  for (i = 1; i <= even; i++) {
    if (i % 2 == 0) document.querySelector("#even-list").append(`- ${i} `);
  }
}

function toCelsius() {
  fa = document.querySelector("#fa").value;
  document
    .querySelector("#ce-result")
    .append(`${Number((fa - 32) / 1.8).toFixed(2)}`);
}

function toFahrenheit() {
  ce = document.querySelector("#ce").value;
  document
    .querySelector("#fa-result")
    .append(`${Number(ce * 1.8 + 32).toFixed(2)}`);
}

function calcularTotal() {
  op1 = document.querySelector("#op1").value;
  op2 = document.querySelector("#op2").value;
  op3 = document.querySelector("#op3").value;
  op1quant = document.querySelector("#op1quant").value;
  op2quant = document.querySelector("#op2quant").value;
  op3quant = document.querySelector("#op3quant").value;

  valorLeite = 5.29;
  valorFarinha = 4.19;
  valorOvo = 0.65;
  preco1 = 0;
  preco2 = 0;
  preco3 = 0;

  if (op1 == "Leite") preco1 = valorLeite * op1quant;
  else if (op1 == "Farinha") preco1 = valorFarinha * op1quant;
  else preco1 = valorOvo * op1quant;

  if (op2 == "Leite") preco2 = valorLeite * op2quant;
  else if (op2 == "Farinha") preco2 = valorFarinha * op2quant;
  else preco2 = valorOvo * op2quant;

  if (op3 == "Leite") preco3 = valorLeite * op3quant;
  else if (op3 == "Farinha") preco3 = valorFarinha * op3quant;
  else preco3 = valorOvo * op3quant;

  document.querySelector("#total").innerHTML = Number(
    preco1 + preco2 + preco3
  ).toFixed(2);
}

function calcConsumo() {
  km = document.querySelector("#km").value;
  gas = document.querySelector("#gas").value;
  document.querySelector("#gasto").innerHTML = Number(
    (km / 8) * Number(gas)
  ).toFixed(2);
}

function calcValorArea() {
  comprimento = document.querySelector("#comprimento").value;
  largura = document.querySelector("#largura").value;
  document.querySelector("#valorArea").innerHTML = `R$${
    comprimento * largura * 36
  }`;
}

function calcPeso() {
  altura = document.querySelector("#altura").value;
  sexo = document.querySelector('input[name="sexo"]:checked').value;
  peso = sexo == "M"
    ? Number(62.1 * altura - 47.7).toFixed(2)
    : Number(72.7 * altura - 58).toFixed(2);
  document.querySelector("#peso").innerHTML = peso;
}

var numbers = [];

function add() {
  n = document.querySelector("#number");
  numbers.push(n.value);
  document.querySelector("#pNumber").append(`- ${n.value} `);
  n.value = "";
}

function findHigher() {
  document.querySelector("#maior").innerHTML = numbers.sort((a, b) => a - b)[
    numbers.length - 1
  ];
}

function findSmaller() {
  document.querySelector("#menor").innerHTML = numbers.sort((a, b) => a - b)[0];
}

function limpar() {
  numbers = [];
  var divNumbers = document.getElementById("numbers");
  while (divNumbers.hasChildNodes()) {
    divNumbers.removeChild(divNumbers.firstChild);
  }
}
