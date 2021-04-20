import { ToDo } from '../classes';
import '../css/componentes.css';

// Referencias HTML
const divToDoList = document.querySelector('.todo-list');

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

