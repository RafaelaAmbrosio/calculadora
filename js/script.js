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
const unicos = ['+', '-', '*', '/'];

//FUNÇÕES
function procuraUnicos() {
  for (let elemento of visor.textContent) {
    if (unicos.includes(elemento)) {
      return true;
    }
  }
  return false;
}

function inserirElemnetoNoVisor(elemento) {
  if (visor.textContent.length < 14) {
    if (unicos.includes(elemento) && visor.textContent.includes(elemento)) {
      return;
    } else if (elemento === '.') {
      //ifs do '.'
      if (visor.textContent.includes('.') && procuraUnicos()) {
        visor.textContent += elemento;
      } else if (!visor.textContent.includes('.')) {
        visor.textContent += elemento;
      }
    } else if (visor.textContent.length === 1 && visor.textContent === '0') {
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
