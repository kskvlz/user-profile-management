let task = "";
let completedTaskCount = 0;

function showTask() {
  if (!task || task.trim() === "") {
    console.log("Задача отсутсвует");
  } else {
    console.log(`Описание задачи: ${task}`);
  }
}

function setTask(taskDescription) {
  if (task !== "") {
    console.log("Не могу добавить задачу, завершите или удалите предыдущую");
  } else {
    task = taskDescription;
  }
}

function completeTask() {
  if (task === null || task === "") {
    console.log("Нет задачи");
    return;
  }
  task = null;
  completedTaskCount++;
  return true;
}

function deleteTask() {
  if (task === null || task === "") {
    console.log("Нет задачи для удаления");
  } else {
    task = null;
    console.log("Задача удалена");
    return true;
  }
}