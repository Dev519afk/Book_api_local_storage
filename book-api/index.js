const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json()); 

let books = [
  { id: 1, title: "Spider-Man: Miles Morales – Wings of Fury", author: "Brittney Morris" },
  { id: 2, title: "The Hobbit", author: "J.R.R. Tolkien" }
];

// GET all books
app.get('/books', (req, res) => {
  res.status(200).json(books);
});

// POST a new book
app.post('/books', (req, res) => {
  const { title, author } = req.body;
  const newBook = {
    id: books.length + 1,
    title,
    author
  };
  books.push(newBook);
  res.status(201).json(newBook);
});

// PUT (update) a book by ID
app.put('/books/:id', (req, res) => {
  const bookId = parseInt(req.params.id);
  const { title, author } = req.body;
  const book = books.find(b => b.id === bookId);
  if (book) {
    book.title = title;
    book.author = author;
    res.status(200).json(book);
  } else {
    res.status(404).json({ message: 'Book not found' });
  }
});

// DELETE a book by ID
app.delete('/books/:id', (req, res) => {
  const bookId = parseInt(req.params.id);
  const index = books.findIndex(b => b.id === bookId);
  if (index !== -1) {
    const deletedBook = books.splice(index, 1);
    res.status(200).json(deletedBook[0]);
  } else {
    res.status(404).json({ message: 'Book not found' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
