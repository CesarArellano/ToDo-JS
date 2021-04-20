export class ToDoList {
  constructor() {
    this.allTask = [];
  }

  newTask( toDo ) {
    this.allTask.push(toDo);
  }

  deleteTask( id ) {
    
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