const getTodos = async () => {
  const response = await fetch('/my_sneakers');
  const data = await response.json();

  createTodoList(data)
}

const addTodos = async (notes) => {
  const options = {
    method: "POST",
    headers: {
      'Accept': 'application/json',
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      "notes": `${notes}`
    })
  }

  const response = await fetch('/my_sneakers', options)
  const sqlQuery = await response.json()
  if (sqlQuery.validation) {
    getTodos()
  }  
}

const deleteTodo = async (id) => {
  const response = await fetch(`/my_sneakers/${id}`, {
    method: 'DELETE'
  });
  getTodos() 
}

const updateTodo = async (id, notes) => {
  const options = {
    method: "PATCH",
    headers: {
      'Accept': 'application/json',
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      "notes": `${notes}`
    })
  }

  const response = await fetch(`/my_sneakers/${id}`, options)
  const sqlQuery = await response.json()
  if (sqlQuery.validation) {
    getTodos()
  } 
}

const createTodoList = async (data) => {
  const container = document.querySelector('#text-container');
  container.innerHTML = ''

  const listHeader = document.createElement('div')
  listHeader.classList.add('textbox')
  listHeader.innerText = 'LIST'
  container.appendChild(listHeader)

  data.forEach((e) => {
    const todoItemContainer = document.createElement('div')
    todoItemContainer.classList.add('todo-item-container')
    todoItemContainer.setAttribute('id', e.persons_id)
    container.appendChild(todoItemContainer)

    const updateBtn = document.createElement('button');
    updateBtn.classList.add('update')
    updateBtn.innerText = 'Update'
    updateBtn.addEventListener('click', (e) => {
      updateTodo(e.currentTarget.parentElement.id, e.currentTarget.nextSibling.innerText)           
    });
    todoItemContainer.append(updateBtn)

    const todoItemName = document.createElement('div');
    todoItemName.classList.add('todo-item-name')
    todoItemName.setAttribute('contentEditable', 'true')
    todoItemName.innerText = e.notes;
    todoItemContainer.append(todoItemName);

    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete')
    deleteBtn.innerText = 'Delete'
    deleteBtn.addEventListener('click', (e) => {
      deleteTodo(e.currentTarget.parentElement.id)           
    });
    todoItemContainer.append(deleteBtn)
  });
}

//===============================Get======================================

const getBtn = document.getElementById('GET');
getBtn.addEventListener('click', () => {
  getTodos()
})
//===============================post======================================

const post = document.querySelector('#post');

post.addEventListener('click', () => {
  const notes = document.getElementById('input').value
  addTodos(notes) 
})