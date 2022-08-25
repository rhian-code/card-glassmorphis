
const nightMode = document.querySelector('#toggle')
const bgDark = document.querySelector('body')


// ao clicar mudaremos as cores
nightMode.addEventListener('click', () => {
  // adiciona a classe `night-mode` ao html
  bgDark.classList.toggle('night-mode')

})