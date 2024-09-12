let AddTodo = function() {
    //get search bar text
    const searchBar = document.getElementById("search_bar");
    console.log(searchBar.innerHTML);
    searchBar.innerHTML = 'hola mundo';

    //add it to the list

    // alert(searchBar.innerText);
}

document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM completed')
});

const submitButton = document.querySelector('#submit_button');
submitButton.addEventListener('click', function() {
    alert(submitButton?.value);
});

console.log(submitButton);


