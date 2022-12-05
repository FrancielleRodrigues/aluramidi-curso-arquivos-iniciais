function tocaSom(idElementoAudio) {
  document.querySelector(idElementoAudio).play();

}

const listaDeTeclas = document.querySelectorAll('.tecla');


for (let contador = 0; contador < listaDeTeclas.length; contador++) {

  const tecla = listaDeTeclas[contador];
  const instrumento = tecla.classList[1];
  console.log(instrumento);
  //template string
  const idAudio = `#som_${instrumento}`;
  console.log(idAudio);

  tecla.onClick = function () {
    tocaSom(idAudio);

  }

  tecla.onkeydown = function (evento) {
    console.log(evento.code)
    if (evento.code === 'Space') {
      tecla.classList.add('ativa');
    }

  }

  tecla.onkeyup = function () {
    tecla.classList.remove('ativa');

  }

  console.log(contador)

}

