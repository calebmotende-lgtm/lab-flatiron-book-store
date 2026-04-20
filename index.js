const bookStore = {
    name: 'Flatbooks Technical Books',
    books: [
        {
            id:1,
            title: 'Eloquent JavaScript: A Modern Introduction to Programming',
            author: 'Marjin Haverbeke',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/51IKycqTPUL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',
            
        },
        {
            id:2,
            title: 'JavaScript & JQuery: Interactive Front-End Web Development',
            author: 'Jon Duckett',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/31SRWF+LkKL._SX398_BO1,204,203,200_.jpg'
        },
        {
            id:3,
            title: 'JavaScript: The Good Parts',
            author: 'Douglas Crockford',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/5131OWtQRaL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',
        },
        {
            id:4,
            title: 'JavaScript: The Definitive Guide',
            author: 'David Flanagan',
            imageUrl: "https://images-na.ssl-images-amazon.com/images/I/51wijnc-Y8L._SX379_BO1,204,203,200_.jpg"
            
        },
        {
            id:5,
            title: 'You Don’t Know JS',
            author: 'Kyle Simpson',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/41T5H8u7fUL._SX331_BO1,204,203,200_.jpg'
        },
        {
            id:6,
            title: 'Cracking the Coding Interview',
            author: 'Gayle Laakmann McDowell',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/41oYsXjLvZL._SY344_BO1,204,203,200_.jpg'
            
        }
    ]
}

// Write your code here!
// --- 2. Update Existing Element ---

// Select the DOM element with the id of 'header' 
const bookstoreTitle = document.querySelector('#header');

// Change the textContent to the name property of the bookstore object
bookstoreTitle.textContent = bookstore.name;


// --- 3. Create New Element ---

// Select the element with id of 'book-list'
const bookList = document.querySelector('#book-list');

// Loop through every book in the bookstore.books array
bookstore.books.forEach(book => {
    
    // Create the required elements
    const bookContainer = document.createElement('li');
    const bookTitle = document.createElement('h3');
    const bookAuthor = document.createElement('p');
    const bookImage = document.createElement('img');

    // Set the content to match the book object
    bookTitle.textContent = book.title;
    bookAuthor.textContent = book.author;
    bookImage.src = book.image;
    bookImage.alt = book.title;

    // Append elements to bookContainer
    bookContainer.append(bookTitle, bookAuthor, bookImage);

    // Append bookContainer to the bookList
    bookList.appendChild(bookContainer);
});


// --- 4. BONUS CHALLENGE: Delete Element ---

// Delete the element with id of 'delete-this' from the DOM
const deleteMe = document.querySelector('#delete-this');
if (deleteMe) {
    deleteMe.remove();
}