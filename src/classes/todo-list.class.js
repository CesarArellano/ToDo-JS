import { ToDo } from "./todo.class";

export class ToDoList {
  constructor() {
    this.loadLocalStorage();
  }

  newTask( toDo ) {
    this.allTask.push(toDo);
    this.saveLocalStorage();
  }

  deleteTask( id ) {
    this.allTask = this.allTask.filter(task => task.id != id);
    this.saveLocalStorage();
  }

  markCompleted( id ) {
    for(const task of this.allTask) {
      if (task.id == id) {
        task.completado = !task.completado;
        this.saveLocalStorage();
        break;
      }
    }
  }

  deletedCompleted() {
    this.allTask = this.allTask.filter(task => !task.completado);
    this.saveLocalStorage();
  }

  loadLocalStorage() {
    this.allTask = ( localStorage.getItem('toDo') ) ? JSON.parse(localStorage.getItem('toDo')) : [];
    this.allTask = this.allTask.map( ToDo.fromJson );
  }
  saveLocalStorage() {
    localStorage.setItem('toDo', JSON.stringify(this.allTask));
  }
}