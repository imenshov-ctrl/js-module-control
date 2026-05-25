class Task {
  constructor(id, text) {
    this.id = id;
    this.text = text;
    this.done = false;
  }
  toggle() { this.done = !this.done; }
}

class TodoList {
  constructor() { this.tasks = []; this.nextId = 1; }
  add(text) {
    const task = new Task(this.nextId++, text);
    this.tasks.push(task);
    return task;
  }
  remove(id) { this.tasks = this.tasks.filter(t => t.id !== id); }
  getActive() { return this.tasks.filter(t => !t.done); }
}

const todo = new TodoList();
const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

function render() {
  taskList.innerHTML = "";
  todo.tasks.forEach(task => {
    const li = document.createElement("li");
    li.dataset.id = task.id;
    li.textContent = task.text;
    li.style.textDecoration = task.done ? "line-through" : "none";
    li.style.cursor = "pointer";
    taskList.appendChild(li);
  });
}

// Делегування подій
taskList.addEventListener("click", (e) => {
  const li = e.target.closest("li");
  if (!li) return;
  const task = todo.tasks.find(t => t.id === Number(li.dataset.id));
  if (task) { task.toggle(); render(); }
});

addBtn.addEventListener("click", () => {
  const text = input.value.trim();
  if (!text) return;
  todo.add(text);
  input.value = "";
  render();
});

input.addEventListener("keydown", e => {
  if (e.key === "Enter") addBtn.click();
});