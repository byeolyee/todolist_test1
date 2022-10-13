const get =(target)=>{
    return document.querySelector(target)
}

const createItem = (target) =>{
    return document.createElement(target)
}

const inputText = get('.todo')
const todoList = get('.todo-list')
const addButton = get('.add-button')

let keyCount = 0;

const addTodo =()=>{
    if(inputText.value.trim() ===''){
        alert('할 일을 입력해주세요')
        return
    }

    const item = createItem('div')
    const checkbox = createItem('input')
    const text = createItem('span')
    const button = createItem('button')

    const key = keyCount
    keyCount += 1

    item.setAttribute('data-key', key)
    item.appendChild(checkbox)
    item.appendChild(text)
    item.appendChild(button)
    todoList.appendChild(item)

    checkbox.type='checkbox'
    checkbox.addEventListener('change',(e)=>{
        item.style.textDecoration 
        = e.target.checked ? 'line-through' : ''
    })

    text.textContent=inputText.value;

    button.textContent = 'delete'
    button.addEventListener('click',()=>{
        removeTodo(key)
    })

    inputText.value = ''
}

const removeTodo =(key)=>{
    const item = get(`[data-key="${key}"]`)
    todoList.removeChild(item)
}

addButton.addEventListener('click', addTodo);

inputText.addEventListener('keyup',(e)=>{
    const ENTER = 13
    if(e.keyCode === ENTER){
        addTodo()
    }
})