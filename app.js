const react = document.querySelector(".check-react");
const vue = document.querySelector(".check-vue");
const angular = document.querySelector(".check-angular");
const botao1 = document.getElementById("button-button1");
const botao2 = document.getElementById("button-button2");

function myFunction(input) {
  let checkBox = document.querySelector(input);

  if (checkBox.checked == true) {
    checkBox.value = true;
  } else {
    checkBox.value = false;
  }
}

//função dos botões
botao1.addEventListener("click", remover);
botao2.addEventListener("click", adicionar);
valor = 0;

function setValue(value) {
  document.getElementById("label").value = value;
}

function adicionar() {
  valor++;
  setValue(valor);
  return;
}

function remover() {
  if (valor >= 1) {
    valor--;
    setValue(valor);
    return;
  }
}

function enviar() {
  const formValor = {
    react: document.querySelector(".check-react").value,
    vue: document.querySelector(".check-vue").value,
    angular: document.querySelector(".check-angular").value,
    quantidade: document.querySelector(".input-quantidade").value,
    mensagem: document.querySelector(".textarea-obs").value,
  };
  alert(formValor);
}

function Check() {
  document.getElementById("check-react").checked = true;
}
function Uncheck() {
  document.getElementById("check-react").checked = false;
}
