const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if (inputBox.value === '') {
        alert("Please add a task.");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;

        let span = document.createElement("span");
        span.innerHTML = "\u00D7"; // Cross icon for delete
        span.onclick = function() {
            this.parentElement.remove();
        };

        li.appendChild(span);
        li.onclick = function() {
            this.classList.toggle("checked"); // Toggle 'checked' class to mark task as complete/incomplete
        };

        listContainer.appendChild(li);
        inputBox.value = ""; // Clear input field
    }
}
