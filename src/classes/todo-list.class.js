export class ToDoList {
  constructor() {
    this.allTask = [];
  }

  newTask( toDo ) {
    this.allTask.push(toDo);
  }

  deleteTask( id ) {
    this.allTask = this.allTask.filter(task => task.id != id);
  }

  markCompleted( id ) {
    for(const task of this.allTask) {
      if (task.id == id) {
        task.completado = !task.completado;
        break;
      }
    }
  }

  deletedCompleted() {
    
  }
}