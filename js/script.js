const body = document.querySelector('body');
const visor = document.querySelector('.visor');

//BOTÕES NUMERICOS
const botaoZero = document.querySelector('.button-zero');
const botaoUm = document.querySelector('.button-um');
const botaoDois = document.querySelector('.button-dois');
const botaoTres = document.querySelector('.button-tres');
const botaoQuatro = document.querySelector('.button-quatro');
const botaoCinco = document.querySelector('.button-cinco');
const botaoSeis = document.querySelector('.button-seis');
const botaoSete = document.querySelector('.button-sete');
const botaoOito = document.querySelector('.button-oito');
const botaoNove = document.querySelector('.button-nove');

//PONTO
const botaoPonto = document.querySelector('.button-ponto');

//OPERAÇÕES
const botaoDividir = document.querySelector('.button-dividir');
const botaoMultiplicar = document.querySelector('.button-multiplicar');
const botaoPorcentagem = document.querySelector('.button-porcentagem');
const botaoMenos = document.querySelector('.button-menos');
const botaoMais = document.querySelector('.button-mais');

//INVERTE
const botaoInverte = document.querySelector('.button-inverte');

//LIMPA
const botaoLimpaUm = document.querySelector('.button-limpar');
const botaoC = document.querySelector('.button-c');

//RESULTADO
const botaoResultado = document.querySelector('.button-resultado');

//OUTROS
const unicos = ['+', '-', 'x', '÷'];
const numeros = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

/////FUNÇÕES/////

//--Funções de Limpeza
function limpaTudo() {
  visor.textContent = '0';
}

function limpaUm() {
  if (visor.textContent.length === 1) {
    visor.textContent = '0';
  } else {
    visor.textContent = visor.textContent.slice(0, [visor.textContent.length - 1]);
  }
}
// --Funções Auxiliares
function procuraUnicos() {
  for (let elemento of visor.textContent.slice(1)) {
    if (unicos.includes(elemento)) {
      return true;
    }
  }
  return false;
}

function identificarOperacao(elemento) {
  if (elemento === '+') {
    soma();
  } else if (elemento === '-') {
    subtrair();
  } else if (elemento === 'x') {
    mutiplicacao();
  } else if (elemento === '÷') {
    divisao();
  }
}

function acharOperador() {
  for (let elemento of visor.textContent.slice(1)) {
    if (unicos.includes(elemento)) {
      return elemento;
    }
  }
}

function tamanhoResultado(resultado) {
  let strResultado = `${resultado}`;
  if (strResultado.length > 12) {
    visor.textContent = strResultado.slice(0, 12);
  } else {
    visor.textContent = strResultado;
  }
}

// --Função do Visor
function inserirElemnetoNoVisor(elemento) {
  if (visor.textContent.length < 12) {
    if (unicos.includes(elemento) && procuraUnicos() && !unicos.includes(visor.textContent.slice(-1))) {
      identificarOperacao(acharOperador());
      visor.textContent += elemento;
    } else if (unicos.includes(elemento) && unicos.includes(visor.textContent.slice(-1))) {
      return;
    } else if (elemento === '.') {
      //ifs do '.'
      if (
        procuraUnicos() &&
        !visor.textContent.slice(visor.textContent.indexOf(acharOperador()) + 1).includes('.') &&
        !unicos.includes(visor.textContent.slice(-1))
      ) {
        visor.textContent += elemento;
      } else if (!visor.textContent.includes('.') && !procuraUnicos()) {
        visor.textContent += elemento;
      }
    } else if (visor.textContent.length === 1 && visor.textContent === '0' && !unicos.includes(elemento)) {
      visor.textContent = elemento;
    } else {
      visor.textContent += elemento;
    }
  }
}

// --Funções Matemáticas
function soma() {
  let separado = visor.textContent.split('+');
  let a = parseFloat(separado[0]),
    b = parseFloat(separado[1]);

  let resultado = a + b;

  tamanhoResultado(resultado);
}

function subtrair() {
  let a = parseFloat(visor.textContent.slice(0, visor.textContent.slice(1).indexOf('-') + 2)),
    b = parseFloat(visor.textContent.slice(visor.textContent.slice(1).indexOf('-') + 2));

  let resultado = a - b;

  tamanhoResultado(resultado);
}

function mutiplicacao() {
  let separado = visor.textContent.split('x');
  let a = parseFloat(separado[0]),
    b = parseFloat(separado[1]);

  let resultado = a * b;

  tamanhoResultado(resultado);
}

function divisao() {
  let separado = visor.textContent.split('÷');
  let a = parseFloat(separado[0]),
    b = parseFloat(separado[1]);

  let resultado = a / b;

  tamanhoResultado(resultado);
}

function porcentagem() {
  if (!procuraUnicos()) {
    visor.textContent = '0';
  } else if (!unicos.includes(visor.textContent.slice(-1))) {
    let operador = acharOperador();
    let separado = visor.textContent.split(operador);
    let a = separado[0],
      b = parseFloat(separado[1]);

    if (operador === '-' || operador === '+') {
      if (operador === '-') {
        b = parseFloat(visor.textContent.slice(visor.textContent.slice(1).indexOf('-') + 2));
        a = parseFloat(visor.textContent.slice(0, visor.textContent.slice(1).indexOf('-') + 2));
        b = (a * b) / 100;
        visor.textContent = `${a}${operador}${b}`;
        return;
      } else {
        b = (a * b) / 100;
        visor.textContent = `${a}${operador}${b}`;
      }
    } else {
      b = b / 100;
      visor.textContent = `${a}${operador}${b}`;
    }
  }
}

function inverter() {
  if (!procuraUnicos()) {
    let tranforma = parseFloat(visor.textContent);
    if (visor.textContent.slice(0) === '-') {
      visor.textContent = `${Math.abs(tranforma)}`;
    } else {
      visor.textContent = `${(tranforma *= -1)}`;
    }
  } else if (!unicos.includes(visor.textContent.slice(-1))) {
    let operador = acharOperador();
    let separado = visor.textContent.split(operador);
    let a = separado[0],
      b = separado[1];

    if (operador === '-') {
      b = visor.textContent.slice(visor.textContent.slice(1).indexOf('-') + 2);
      a = visor.textContent.slice(0, visor.textContent.slice(1).indexOf('-') + 2);
      if (b.slice(0) !== '-') {
        visor.textContent = `${a}${parseFloat(b) * -1}`;
      } else {
        visor.textContent = `${a}${Math.abs(parseFloat(b))}`;
      }
    } else {
      if (b.slice(0) !== '-') {
        visor.textContent = `${a}${operador}${parseFloat(b) * -1}`;
      } else {
        visor.textContent = `${a}${operador}${Math.abs(parseFloat(b))}`;
      }
    }
  }
}

// --Função do Botão Resultado
function resultado() {
  if (!unicos.includes(visor.textContent[visor.textContent.length - 1])) {
    identificarOperacao(acharOperador());
  }
}

// --Função KeyDown
function identificarEvent(event) {
  if (event.key === '*' || event.key === '/') {
    if (event.key === '*') {
      inserirElemnetoNoVisor('x');
    } else {
      inserirElemnetoNoVisor('÷');
    }
  } else if (numeros.includes(event.key) || unicos.includes(event.key)) {
    inserirElemnetoNoVisor(event.key);
  } else if (event.key === 'Backspace') {
    limpaUm();
  } else if (event.key === 'Enter') {
    resultado();
  }
}

//EVENTOS
botaoLimpaUm.onclick = limpaUm;
botaoC.onclick = limpaTudo;

botaoZero.onclick = () => inserirElemnetoNoVisor(botaoZero.textContent);
botaoUm.onclick = () => inserirElemnetoNoVisor(botaoUm.textContent);
botaoDois.onclick = () => inserirElemnetoNoVisor(botaoDois.textContent);
botaoTres.onclick = () => inserirElemnetoNoVisor(botaoTres.textContent);
botaoQuatro.onclick = () => inserirElemnetoNoVisor(botaoQuatro.textContent);
botaoCinco.onclick = () => inserirElemnetoNoVisor(botaoCinco.textContent);
botaoSeis.onclick = () => inserirElemnetoNoVisor(botaoSeis.textContent);
botaoSete.onclick = () => inserirElemnetoNoVisor(botaoSete.textContent);
botaoOito.onclick = () => inserirElemnetoNoVisor(botaoOito.textContent);
botaoNove.onclick = () => inserirElemnetoNoVisor(botaoNove.textContent);

botaoPonto.onclick = () => inserirElemnetoNoVisor(botaoPonto.textContent);

botaoMenos.onclick = () => inserirElemnetoNoVisor(botaoMenos.textContent);
botaoMais.onclick = () => inserirElemnetoNoVisor(botaoMais.textContent);
botaoMultiplicar.onclick = () => inserirElemnetoNoVisor(botaoMultiplicar.textContent);
botaoDividir.onclick = () => inserirElemnetoNoVisor(botaoDividir.textContent);
botaoPorcentagem.onclick = porcentagem;
botaoInverte.onclick = inverter;

botaoResultado.onclick = resultado;

body.addEventListener('keydown', identificarEvent);
