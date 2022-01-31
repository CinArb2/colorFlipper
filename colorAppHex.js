let textNameColor = document.querySelector('.js_div-valueColor')
let btnHex = document.querySelector('.js_btn-hex')

let arregloHex = ['A', 'B', 'C', 'D', 'E', 'F', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

btnHex.addEventListener('click', () => {
  let colorHex = "#";
  
  for (let i = 1; i < 7; i++){
    colorHex += arregloHex[getRandoNumber()];
  }
  textNameColor.textContent = colorHex;
  document.body.style.backgroundColor = colorHex;
})

function getRandoNumber() {
  return Math.floor(Math.random() * arregloHex.length);
}