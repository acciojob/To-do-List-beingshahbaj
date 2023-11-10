//your code here

document.getElementById('addTodoBtn').addEventListener('click', function() {
 let inputValue = document.getElementById('newTodoInput').value;

 if (inputValue.trim() !== '') {
    let li = document.createElement('li');
    li.textContent = inputValue;
    document.getElementById('todoList').appendChild(li);
    document.getElementById('newTodoInput').value = '';
 }
});