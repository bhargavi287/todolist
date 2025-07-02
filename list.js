function addTask() {
  const taskInput = document.getElementById("taskInput");
  const priority = document.getElementById("priority").value;
  const deadline = document.getElementById("deadline").value;

  if (!taskInput.value.trim()) {
    alert("Task cannot be empty.");
    return;
  }

  const li = document.createElement("li");
  li.className = "task-item";

  const leftDiv = document.createElement("div");
  leftDiv.className = "task-left";
  leftDiv.innerHTML = `
    <strong>${taskInput.value}</strong>
    <span class="priority ${priority}">${priority}</span>
    ${deadline ? `<div style="font-size: 12px; margin-top: 5px;">📅 ${deadline}</div>` : ""}
  `;

  leftDiv.onclick = function () {
    li.classList.toggle("completed");
  };

  const deleteBtn = document.createElement("button");
  deleteBtn.className = "delete-btn";
  deleteBtn.textContent = "🗑️";
  deleteBtn.onclick = () => li.remove();

  li.appendChild(leftDiv);
  li.appendChild(deleteBtn);

  document.getElementById("taskList").appendChild(li);

  // Clear input
  taskInput.value = "";
  document.getElementById("deadline").value = "";
}
