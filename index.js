function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  return fetch('https://anapioficeandfire.com/api/books')
.then(response => {
// Convert response to JSON
return response.json();
})
.then(json => {
// Call renderBooks with the JSON data
renderBooks(json);
})
.catch(error => {
console.error('Error fetching data:', error);
});
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
