const nombre = "Jordi";

console.log("hola, me llamo, " + nombre);

function restaAdditiva(a, b) {
  return a + b;
}

function suma(a, b) {
  return a + b;
}

function addTask() {
  const task = document.getElementById("task").value;
  const taskList = document.getElementById("taskList");
  const newTask = document.createElement("li");
  newTask.innerText = task;
  taskList.appendChild(newTask);
}
