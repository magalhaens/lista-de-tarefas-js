console.log('Conectado ao index.html')

const input = document.querySelector('#input');
const button = document.querySelector('#button');
const list = document.querySelector('#tasklist');
const indicator = document.querySelector('#indicator');
const counter = [];

let taskCounter = 0;

button.addEventListener('click', () => {
    let task = input.value.trim()

    if(task !== ''){
        let item = document.createElement('p')
        list.appendChild(item)
        item.textContent = task

        counter.push(task)

        indicator.textContent = counter.length;

        input.value = ''
        input.focus()
    } else {
        window.alert('Espaço em branco, insira uma tarefa')
    }
})