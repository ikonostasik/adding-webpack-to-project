import { TaskManager } from './javascript/task-manager';

import 'bootstrap/scss/bootstrap.scss';
import './scss/main.scss';

function initApp() {
  const taskManager = new TaskManager('content');
  taskManager.initTasks();
}

initApp();
