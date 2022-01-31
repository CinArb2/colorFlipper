let btnSimple = document.querySelector('.js_btn-simple')
let textNameColor = document.querySelector('.js_div-valueColor')

let basicColors = ['yellow', '#ff0000', 'blue', 'hsl(135, 69%, 50%)', '#ee82ee', 'orange']

btnSimple.addEventListener('click', () => {
  let simpleColor = basicColors[getRandoNumber()]
  document.body.style.backgroundColor = simpleColor;
  textNameColor.textContent = simpleColor;
})

function getRandoNumber() {
  return randoNumber = Math.floor(Math.random() * basicColors.length);
}

