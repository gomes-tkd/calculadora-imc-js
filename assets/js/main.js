const corpoHtml = document.querySelector(".corpo");
const formulario = document.querySelector(".formulario");
const resultadoImc = document.querySelector(".resultado-imc");
const grauImc = document.querySelector(".grau-imc");
const apenasNumero = /[^\d\.]/g;

let altura = 0.0;
let peso = 0.0;
let indiceIMC = 0.0;
let grau = "";

function createForm() {
  return `
  <div class="formulario">
    <form  class="formulario-corpo">
      <label name="inputAltura">Altura</label>
      <input type="text" name="inputAltura" class="altura" />
      <label name="peso">peso</label>
      <input type="text" name="peso" class="peso" />
    </form>
    ${createResultado()}
    <button 
      onclick="calculaIndice(this)" 
      class="btn-calcular"
    >
      Calcular!!
    </button>
  </div>
  `;
}

function createResultado() {
  if (indiceIMC < 18.5) {
    grau = "Magreza";
    console.log(grau);
  } else if (indiceIMC >= 18.5 && indiceIMC <= 24.9) {
    grau = "Normal";
    console.log(grau);
  } else if (indiceIMC >= 25.0 && indiceIMC <= 29.9) {
    grau = "Sobrepeso";
    console.log(grau);
  } else if (indiceIMC >= 30.0 && indiceIMC <= 34.9) {
    grau = "Obesidade I";
    console.log(grau);
  } else if (indiceIMC >= 35.0 && indiceIMC <= 40) {
    grau = "Obesidade II";
    console.log(grau);
  } else {
    grau = "Obesidade III";
    console.log(grau);
  }

  return `
    <p>IMC: <span class="resultado-imc">${indiceIMC.toString()}</span></p>
    <p>Grau: <span class="grau-imc">${grau}</span></p>
  `;
}

function createGrausObesidade() {
  return `
    <div class="grau-lista">
      <h2>Grau do IMC</h2>
      <p>Magreza: menor que 18.5</p>
      <p>Normal: 18.5 a 24.9</p>
      <p>Sobrepeso: 25.0 a 29.9</p>
      <p>Obesidade I: 30.0 a 34.9</p>
      <p>Obesidade II: 35.0 a 39.9</p>
      <p>Obesidade III: maior que 40</p>
    </div>
  `;
}

function createHtml() {
  return `
    <section class="container">
      ${createForm()} 
      ${createGrausObesidade()}
    </section>
  `;
}

function calculaIndice() {
  const valorAltura = document.querySelector(".altura");
  const valorPeso = document.querySelector(".peso");
  altura = +valorAltura.value.replace(apenasNumero, "");
  peso = +valorPeso.value.replace(apenasNumero, "");
  indiceIMC = (peso / Math.pow(altura, 2)).toFixed(1);
  console.log(indiceIMC);
}


corpoHtml.innerHTML += createHtml();
