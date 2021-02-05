const form = document.querySelector('#new-item-from');
const list = document.querySelector('#list');
const input = document.querySelector('#item-input')

form.addEventListener('submit', event =>
{
    event.preventDefault()
    const item = document.createElement('div')
    item.innerText = input.value
    item.classList.add('list-item')

    list.appendChild(item)
})