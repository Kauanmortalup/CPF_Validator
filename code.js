function formatar(mascara, documento) {
  let i = documento.value.length;
  let saida = "#";
  let texto = mascara.substring(i);
  while (texto.substring(0, 1) != saida && texto.length) {
    documento.value += texto.substring(0, 1);
    i++;
    texto = mascara.substring(i);
  }
}

function salvaCPF() {
  let cpfCampo = document.getElementById("cpfInput"); // Acesse o campo de entrada pelo seu ID
  let cpf = cpfCampo.value; // Obtenha o valor do campo de entrada

  if (validarCPF(cpf)) {
    document.getElementById("resultado").textContent = "CPF - Valido";
    document.getElementById("resultado").style.color = "rgb(36, 216, 0)";
  } else {
    document.getElementById("resultado").textContent = "CPF - Invalido";
    document.getElementById("resultado").style.color =
      "rgba(255, 14, 14, 0.925)";
  }
}

function validarCPF(cpf) {
  let numCpf = converteNum(cpf);

  let primeiroDigito = validaPrimeiroDigito(numCpf); //Valida 1º digito
  let segundoDigito = validaSegundoDigito(numCpf); //Valida 2º digito

  return primeiroDigito && segundoDigito;
}

function converteNum(cpf) {
  //Converte o numero para int e reserva apenas os numero (tira . e -)
  numCpf = [];
  for (let i = 0, d = 0; i < 11; i++, d++) {
    if (d === 3 || d === 7 || d === 11) {
      d++;
    }
    numCpf[i] = parseInt(cpf[d]);
  }
  return numCpf;
}

function validaPrimeiroDigito(numCpf) {
  //Validação do primeiro dígito
  let soma = 0;
  for (let i = 0, d = 10; i < 9; i++, d--) {
    soma += numCpf[i] * d;
  }
  console.log(soma);
  resto = (soma * 10) % 11 == 10 ? 0 : (soma * 10) % 11; // Se resto for 10 ele substitui por 0
  console.log(resto);
  if (resto == numCpf[9]) {
    return true;
  }
}

function validaSegundoDigito(numCpf) {
  //Validação do segundo dígito
  let soma = 0;
  for (let i = 0, d = 11; i < 10; i++, d--) {
    soma += numCpf[i] * d;
  }
  console.log(soma);
  resto = (soma * 10) % 11 == 10 ? 0 : (soma * 10) % 11; // Se resto for 10 ele substitui por 0
  console.log(resto);
  if (resto == numCpf[10]) {
    return true;
  }
}
