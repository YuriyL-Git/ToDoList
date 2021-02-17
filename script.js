//

//

const form = document.querySelector('#new-item-from');
const todoInput = document.querySelector('#item-input')
const list = document.querySelector('#list')
const template = document.querySelector('#list-item-template')

form.addEventListener('submit', event => {
    event.preventDefault()

    const todoName = todoInput.value
    renderTodo(todoName)//TODO create render function
    todoInput.value = ''
})

function renderTodo(todoName) {
    const templateClone = template.content.cloneNode(true)
    const textElement = templateClone.querySelector('')
    console.log(templateClone)

}