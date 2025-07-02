function addTodo() {
  const input = document.getElementById("todo-input");
  const text = input.value.trim();
  if (text === "") return;

  const li = document.createElement("li");

  li.innerHTML = `
    <span onclick="toggleComplete(this)">${text}</span>
    <button class="delete-btn" onclick="deleteTodo(this)">✕</button>
  `;

  document.getElementById("todo-list").appendChild(li);
  input.value = "";
}

function deleteTodo(btn) {
  btn.parentElement.remove();
}

function toggleComplete(span) {
  span.parentElement.classList.toggle("completed");
}
