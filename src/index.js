import './styles.css';

import { ToDo, ToDoList } from './classes';
import { crearToDoHTML } from './js/componentes';


const toDoList = new ToDoList();
const tarea = new ToDo('Lavar la ropa');

toDoList.newTask(tarea);

console.log(toDoList);

crearToDoHTML(tarea);