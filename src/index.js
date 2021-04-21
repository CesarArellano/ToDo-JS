import './styles.css';

import { ToDo, ToDoList } from './classes';
import { crearToDoHTML } from './js/componentes';

export const toDoList = new ToDoList();

toDoList.allTask.forEach( crearToDoHTML ); // Sólo por que se recibe un argumento.
//toDoList.allTask.forEach( (task) => crearToDoHTML(task) );