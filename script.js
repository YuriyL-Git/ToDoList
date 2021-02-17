//

//

const form = document.querySelector('#new-item-from');
const todoInput = document.querySelector('#item-input')
const list = document.querySelector('#list')
const template = document.querySelector('#list-item-template')
const LOCAL_STORAGE_PREFIX = 'TODO_LIST'
const TODO_STORAGE_KEY = `${LOCAL_STORAGE_PREFIX}-todos`
const todos = loadTodo()

todos.forEach(todo => renderTodo(todo))

list.addEventListener('change', event => {
    if (!event.target.matches('[data-list-item-text]')) return


})

form.addEventListener('submit', event => {
    event.preventDefault()

    const todoName = todoInput.value
    if (todoName === '') return

    let Id = 0
    if (todos.length !== 0) {
        Id = parseInt(todos[todos.length - 1].id + 1)
    }
    const newTodo = {
        id: Id,
        name: todoName,
        completed: false
    }
    todos.push(newTodo)

    renderTodo(newTodo)
    saveTodo()
    todoInput.value = ''
})

function renderTodo(todo) {
    const templateClone = template.content.cloneNode(true)
    const textElement = templateClone.querySelector('[data-list-item-text]')
    const listItem = templateClone.querySelector('.list-item')
    listItem.dataset.todoId = todo.id
    textElement.innerText = todo.name
    list.appendChild(templateClone)
    console.log(templateClone)
}

function loadTodo() {
    const todoString = localStorage.getItem(TODO_STORAGE_KEY)
    return JSON.parse(todoString) || []
}

function saveTodo() {
    localStorage.setItem(TODO_STORAGE_KEY, JSON.stringify(todos))
}