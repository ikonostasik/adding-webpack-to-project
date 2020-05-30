function initApp() {
  const taskManager = new TaskManager('content')
  taskManager.initTasks();
}

initApp();