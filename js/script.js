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

//FUNÇÕES
function procuraUnicos() {
  for (let elemento of visor.textContent) {
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

function resultado() {
  if (!unicos.includes(visor.textContent[visor.textContent.length - 1])) {
    identificarOperacao(acharOperador());
  }
}

function acharOperador() {
  for (let elemento of visor.textContent) {
    if (unicos.includes(elemento)) {
      return elemento;
    }
  }
}

function inserirElemnetoNoVisor(elemento) {
  if (visor.textContent.length < 14) {
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

function soma() {
  let index = visor.textContent.split('+');
  let a = parseFloat(index[0]),
    b = parseFloat(index[1]);

  let resultado = a + b;

  tamanhoResultado(resultado);
}

function subtrair() {
  let index = visor.textContent.split('-');
  let a = parseFloat(index[0]),
    b = parseFloat(index[1]);

  let resultado = a - b;

  tamanhoResultado(resultado);
}

function mutiplicacao() {
  let index = visor.textContent.split('x');
  let a = parseFloat(index[0]),
    b = parseFloat(index[1]);

  let resultado = a * b;

  tamanhoResultado(resultado);
}

function divisao() {
  let index = visor.textContent.split('÷');
  let a = parseFloat(index[0]),
    b = parseFloat(index[1]);

  let resultado = a / b;

  tamanhoResultado(resultado);
}

function tamanhoResultado(resultado) {
  let strResultado = `${resultado}`;
  if (strResultado.length > 14) {
    visor.textContent = strResultado.slice(0, 14);
  } else {
    visor.textContent = strResultado;
  }
}

//EVENTOS
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

botaoLimpaUm.onclick = limpaUm;
botaoC.onclick = limpaTudo;

botaoMenos.onclick = () => inserirElemnetoNoVisor(botaoMenos.textContent);
botaoMais.onclick = () => inserirElemnetoNoVisor(botaoMais.textContent);
botaoMultiplicar.onclick = () => inserirElemnetoNoVisor(botaoMultiplicar.textContent);
botaoDividir.onclick = () => inserirElemnetoNoVisor(botaoDividir.textContent);

botaoResultado.onclick = resultado;
