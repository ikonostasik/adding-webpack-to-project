import { TaskManager } from './javascript/task-manager';

import Bootstrap from 'bootstrap/scss/bootstrap.scss';
import Styles from './scss/main.scss';

function initApp() {
  const taskManager = new TaskManager('content');
  taskManager.initTasks();
}

initApp();
