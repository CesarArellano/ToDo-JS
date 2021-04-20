import { ToDo, ToDoList } from '../classes';
// Referencias HTML
const divToDoList = document.querySelector('.todo-list');
const txtInput = document.querySelector('.new-todo');
const toDoList = new ToDoList();

export const crearToDoHTML = ( toDo ) => {
  const htmlToDo = `
  <li class="${ (toDo.completado) ? 'completed' : ''}" data-id="${toDo.id}">
    <div class="view">
      <input class="toggle" type="checkbox" ${ (toDo.completado) ? 'checked' : ''}>
      <label>${toDo.tarea}</label>
      <button class="destroy"></button>
    </div>
    <input class="edit" value="Create a TodoMVC template">
  </li>`;
  
  const div = document.createElement('div');
  div.innerHTML = htmlToDo;
  divToDoList.append(div.firstElementChild);
  return div.firstElementChild;
};

//Eventos
txtInput.addEventListener('keyup', (event)=> {
  if( event.keyCode === 13 && txtInput.value.length > 0) {
    const newToDo = new ToDo(txtInput.value);
    toDoList.newTask(newToDo);
    crearToDoHTML(newToDo);
    txtInput.value = '';
  }
});

divToDoList.addEventListener('click', (event) => {
  const elementName = event.target.localName; // A qué etiqueta le hizo click.
  const toDoElement = event.target.parentElement.parentElement; // Retorna el elemento HTML seleccionado.
  const toDoID = toDoElement.getAttribute('data-id'); // Conseguir id del atributo.
  if ( elementName.includes('input') ) {
    toDoList.markCompleted(toDoID);
    toDoElement.classList.toggle('completed');
  } else if ( elementName.includes('button') ) {
    toDoList.deleteTask( toDoID );
    divToDoList.removeChild(toDoElement);
  }
  console.log(toDoList);
});