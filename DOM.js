const body = document.body
const btn1 = document.getElementById('btn1') // untuk id
const btn2 = document.querySelector('.btn2') // untuk class

const defaultText = 'woiii'
btn1.textContent = defaultText


btn1.style.border = 'none'
btn1.style.padding = '10px'
btn1.style.fontSize = '17px'

function gantiWarna () {
    btn1.style.background = 'aqua'
}

function rubahText() {
    btn1.textContent = 'lolololool'
}

function mouseKeluar() {
    btn1.textContent = defaultText
}

function munculText() {
    const newText = document.createElement('p')
    newText.textContent =  'nama saya Al-Joestar'
    body.append(newText)

}

function rubahWarna() {
    body.style.color = 'aqua'
}