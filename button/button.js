const button3 = document.querySelector('#button3')
const output = document.querySelector('#output')
button3.addEventListener('click', ()=> {
    const boxForMessage = document.createElement('p')
    const random = Math.round(Math.random()*10)
    boxForMessage.textContent = 'Случайное число:'+random
    output.appendChild(boxForMessage)
})