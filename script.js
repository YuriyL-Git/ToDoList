const form = document.querySelector('#new-item-from');
const list = document.querySelector('#list');
const input = document.querySelector('#item-input')

form.addEventListener('submit', event =>
{
    event.preventDefault()

    //create a new item
    const item = document.createElement('div')
    item.innerText = input.value
    item.classList.add('list-item')

    //add item to the list
    list.appendChild(item)

    //setup event listener
    item.addEventListener('click', () =>
    {
        list.removeChild(item) //remove item from the list
        //item.remove() - alternative way to remove item
    })


    input.value = ''
})