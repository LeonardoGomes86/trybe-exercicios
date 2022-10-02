function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
}

createDaysOfTheWeek();

// Escreva seu código abaixo.

//Parte 1

let decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
let daysList = document.querySelector('#days');
  function criaCalendario () {
  for (let index = 0; index < decemberDaysList.length; index += 1) {
    let days = decemberDaysList[index];
    let createDays = document.createElement('li');
    createDays.className = 'day';
    createDays.innerText = days;
    daysList.appendChild(createDays);
    if (days == 24 || days == 25 || days == 31) {
      createDays.className += ' holiday';
    }
    if (days == 4 || days == 11 || days == 18 || days == 25) {
      createDays.className += ' friday';
    }
  }
}
criaCalendario();
// Parte 2

function criaBotaoFeriado (parametro) {
  let botao = document.createElement('button');
  botao.id = 'btn-holiday';
  botao.innerText = parametro;
  
  let div = document.querySelector('.buttons-container');
  div.appendChild(botao);

}

criaBotaoFeriado('Feriado');
// Parte 3
function mudaCor () {
  let li = document.getElementsByTagName('li');
  for(let i = 0; i < li.length; i += 1) {
    if ((li[i].className == 'day holiday' || li[i].className == 'day holiday friday') && li[i].style.backgroundColor == 'green') {
      li[i].style.backgroundColor = 'rgb(238,238,238)';
    } else if (li[i].className == 'day holiday' || li[i].className == 'day holiday friday') {
      li[i].style.backgroundColor = 'green';
    }
  }
}
let botao = document.getElementById('btn-holiday');
botao.addEventListener('click', mudaCor)

// Parte 4

function criaBotaoSexta (parametro) {
  let botao = document.createElement('button');
  botao.id = 'btn-friday';
  botao.innerText = parametro;
  
  let div = document.querySelector('.buttons-container');
  div.appendChild(botao);

}
criaBotaoSexta('Sexta-feira');

// Parte 5
function mudaTexto () {
  let li = document.getElementsByClassName('friday');
  let sexta = [4, 11, 18, 25];
  for(let i = 0; i < li.length; i += 1) {
    for (let i2 = 0; i2 < sexta.length; i2 += 1) {
      if (i == i2 && li[i].innerText != sexta[i2]) {
        li[i].innerText = sexta[i2];
      } else if (i == i2 && li[i].innerText == sexta[i2] ) {
        li[i].innerText = 'SEXTOU';
      }
    }
  }
}
  
let botao2 = document.getElementById('btn-friday');
botao2.addEventListener('click', mudaTexto)
//Parte 6
function zoomIn () {
  let day = document.getElementsByClassName('day');
  let alvo = event.target
  for (let i = 0; i < day.length; i+= 1) {
    // console.log(day[i].innerText);
    if (alvo == day[i])
    day[i].style.fontSize = '25px'
  }
}

function zoomOut () {
  let day = document.getElementsByClassName('day');
  let alvo = event.target
  for (let i = 0; i < day.length; i+= 1) {
    // console.log(day[i].innerText);
    if (alvo == day[i])
    day[i].style.fontSize = '20px'
  }
}
let day = document.getElementsByClassName('day');
  for (let i = 0; i < day.length; i+= 1) {
    day[i].addEventListener('mouseover', zoomIn)
    day[i].addEventListener('mouseout', zoomOut)
  }
// Parte 7
  function task (parametro) {
    let taskPai = document.querySelector('.my-tasks');
    let task = document.createElement('span');
    task.innerText = parametro
    taskPai.appendChild(task);
  }
  task('Jogar Video Game')
// Parte 8
  function corTask (parametro) {
    let taskPai = document.querySelector('.my-tasks');
    let cor = document.createElement('div');
    cor.className = 'task';
    cor.style.backgroundColor = parametro;
    taskPai.appendChild(cor);
  }
  corTask('green')

// Parte 9

function pegaCor () {
  let task1 = document.querySelector('.my-tasks').lastElementChild;
  if(task1.className == 'task') {
    task1.className = 'task selected';
  } else if (task1.className == 'task selected') {
    task1.className = 'task'
  }
}
let task1 = document.querySelector('.my-tasks').lastElementChild;
task1.addEventListener('click', pegaCor)

// Parte 10

function trocaCor () {
  let day = document.getElementsByClassName('day');
  let alvo = event.target;
  let alvoFundo = document.querySelector('.my-tasks').lastElementChild.style.backgroundColor;
  let alvoAtivo = document.querySelector('.my-tasks').lastElementChild;
  for (i = 0; i < day.length; i += 1) {
    if (alvo == day[i] && alvoAtivo.className == 'task selected' && day[i].style.color != alvoFundo) {
      day[i].style.color = alvoFundo;
    } else if (alvo == day[i] && alvoAtivo.className == 'task selected' && day[i].style.color == alvoFundo) {
      day[i].style.color = 'rgb(119,119,119)';
    } else if (alvo == day[i] && alvoAtivo.className == 'task') {
      day[i].style.color = day[i].style.color;
    }
  }
}
let dayCollor = document.getElementsByClassName('day');
  for (let i = 0; i < day.length; i+= 1) {
    dayCollor[i].addEventListener('click', trocaCor)
  }

  // Bonus

  function compromissos(){
    let caixaTexto = document.getElementById('task-input');
    if(caixaTexto.value.length == 0) {
      alert('ERRO CAIXA DE TEXTO VAZIA');
    } else {
      let createLi = document.createElement('li');
      createLi.innerText = caixaTexto.value;
      let listaPai = document.querySelector('.task-list');
      listaPai.appendChild(createLi);
      caixaTexto.value = '';
    }
  }

  function compromissos2(){
    let caixaTexto = document.getElementById('task-input');
    if(event.key == 'Enter' && caixaTexto.value.length == 0) { // VERIFIQUEI SOBRE DOCUMENTAÇÃO KEY para usar o event.key
      alert('ERRO CAIXA DE TEXTO VAZIA');
    } else if (event.key == 'Enter' && caixaTexto.value.length > 0) {
      let createLi = document.createElement('li');
      createLi.innerText = caixaTexto.value;
      let listaPai = document.querySelector('.task-list');
      listaPai.appendChild(createLi);
      caixaTexto.value = '';
    }
  }

  let buttonAdd = document.getElementById('btn-add');
  buttonAdd.addEventListener('click', compromissos, );
  let caixaTexto2 = document.getElementById('task-input');
  caixaTexto2.addEventListener('keydown', compromissos2);