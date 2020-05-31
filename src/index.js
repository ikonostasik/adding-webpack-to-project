import { TaskManager } from './javascript/task-manager';

import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import Styles from './css/main.css'

function initApp() {
  const taskManager = new TaskManager('content');
  taskManager.initTasks();
}

initApp();
