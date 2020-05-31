import { TaskManager } from './javascript/task-manager';

function initApp() {
  const taskManager = new TaskManager('content');
  taskManager.initTasks();
}

initApp();
