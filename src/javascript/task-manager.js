import { Task } from './task';

export class TaskManager {
  constructor(wrapperId) {
    this.cards =  [{
      title: 'Card title',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed',
      buttonText: 'Reset',
      finished: true
    },
    {
      title: 'Card title 2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed',
      buttonText: 'Complete',
      finished: false
    },
    {
      title: 'Card title 3',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed',
      buttonText: 'Complete',
      finished: false
    }]
    
    this.cardsWrapper = document.getElementById(wrapperId);

    //binding context to functions in order to have "this" 

    this.insertTask = this.insertTask.bind(this);
    this.createTaskHandler = this.createTaskHandler.bind(this);
  }

  initTasks() {  
    this.cards.forEach(this.insertTask)

    const createTaskButton = document.getElementById('create-task');
    
    createTaskButton.addEventListener('click', this.createTaskHandler);  
  }

  createTaskHandler() {  
    const taskTitle = prompt('Enter task name');
    const taskDescription = prompt('Enter task description');
    const newTask = {
      title: taskTitle,
      description: taskDescription,
      buttonText: 'Complete',
      finished: false
    }
    this.cards.push(newTask);

    this.insertTask(newTask)
  }
  
  insertTask(task_object) {
    const task = new Task(task_object)
    this.cardsWrapper.insertAdjacentElement('beforeend',task.el)
  }
}


