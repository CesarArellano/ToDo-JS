import './styles.css';

import { ToDo, ToDoList } from './classes';


const toDoList = new ToDoList();
const tarea = new ToDo('Lavar la ropa');
const tarea2 = new ToDo('Aprender React JS');

toDoList.newTask(tarea);
toDoList.newTask(tarea2);

console.log(toDoList);