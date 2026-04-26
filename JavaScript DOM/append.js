document.title = 'suiiii'
const body = document.body

body.append('hello world')

const h1 = document.createElement('h1') // <h1></h1>
h1.textContent = "ini h1" // isi dari h1

const namaSaya = document.createElement('p')
namaSaya.innerHTML = '<marquee>AL-JOESTAR</marquee>'

const namaKamu = document.createElement('b')
namaKamu.innerText = 'Dio brando'

body.append(h1)
body.append(namaSaya)
body.append(namaKamu)
