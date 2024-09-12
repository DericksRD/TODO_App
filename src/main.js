const submitButton = document.querySelector('#submit_button');
submitButton.addEventListener('click', function() {
    //get search bar text
    const searchBar = document.getElementById("search_bar");

    //Get the list
    const todoList = document.querySelector('.todo-list');
    const newTodo = document.createElement('li');

    //add the element to the list
    newTodo.textContent = searchBar.value;
    todoList.appendChild(newTodo);
});

