
class TaskManager {
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
  }

  initTasks() {  
    this.cards.forEach(this.insertTask)

    const createTaskButton = document.getElementById('create-task');
    
    createTaskButton.addEventListener('click', this.createTaskHandler);  }

  createTaskHandler = () => {  
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
  
  insertTask = (task_object) => {
    const task = new Task(task_object)
    this.cardsWrapper.insertAdjacentElement('beforeend',task.el)
  }

  removeTasksHandler = () => {
    if(confirm('Are you sure you want to remove all tasks?')) {
      this.cards = [];
      this.cardsWrapper.innerHTML = ''; 
    }
  }
}


