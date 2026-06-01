console.log('Conectado ao index.html')

const input = document.querySelector('#input');
const button = document.querySelector('#button');
const list = document.querySelector('#tasklist');
const indicator = document.querySelector('#indicator');

let counter = 0;

button.addEventListener('click', () => {
    let task = input.value.trim()

    if(task !== ''){
        let item = document.createElement('div')
        let taskName = document.createElement('p')
        let taskBtn = document.createElement('button')


        list.appendChild(item)

        item.appendChild(taskName)
        item.appendChild(taskBtn)
        taskName.textContent = task
        taskBtn.innerText = '🗑️'

        counter++;

        indicator.textContent = counter;

        input.value = ''
        input.focus()
        
        taskBtn.addEventListener('click', () => {
            item.remove();
            counter--;
            indicator.textContent = counter;
        })
    } else {
        window.alert('Espaço em branco, insira uma tarefa')
    }
})
