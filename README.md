# Book API

This is a simple REST API built using Node.js and Express for managing a list of books. It performs basic CRUD operations in memory (no database used).

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the server:
   ```bash
   node index.js
   ```

3. Server will be running at: `http://localhost:3000`

## Endpoints

- `GET /books` - Retrieve all books
- `POST /books` - Add a new book
- `PUT /books/:id` - Update book by ID
- `DELETE /books/:id` - Delete book by ID

Test it using Postman.

## Screenshots
![Screenshot (334)](https://github.com/user-attachments/assets/74efa216-c063-4c38-b493-06aa39b8a92c)
![Screenshot (333)](https://github.com/user-attachments/assets/bf20a57e-0a64-4f04-b99c-369f8a6512af)
