# 📚 Library Book Management System

A simple **Library Management System** built using **Node.js, Express.js, and MongoDB**, with optional frontend support (React/HTML-CSS). This project allows librarians to manage books and users to track their borrowed books with due dates.

---

## 🚀 Features

* **Admin**

  * Add, edit, delete books
  * Issue and return books
  * Track availability status

* **User**

  * View borrowed books and due dates
  * Get availability status before borrowing

* **System**

  * Updates availability in real-time
  * Optional email reminders for due dates

---

## 🛠️ Tech Stack

* **Backend:** Node.js, Express.js
* **Database:** MongoDB
* **Frontend (optional):** React / HTML, CSS, Bootstrap or Tailwind CSS
* **Other Tools:** Nodemailer (email notifications), Postman (API testing)

---

## 📂 Project Structure

```
Library-Book-Management/
│
├── backend/
│   ├── models/        # Book & User schemas
│   ├── routes/        # API routes
│   ├── controllers/   # Request handlers
│   ├── config/        # Database config
│   └── server.js      # Main entry point
│
├── frontend/ 
│   ├── index.html
│   ├── book.html
│   ├── login.html
│   └── member_management.html
│
└── README.md
```

---

## ⚡ API Endpoints

### Book APIs

* `POST /api/books` → Add a new book
* `PUT /api/books/:id` → Edit book details
* `DELETE /api/books/:id` → Delete book
* `GET /api/books` → Get all books

### Borrowing APIs

* `POST /api/issue` → Issue a book to a user
* `POST /api/return` → Return a borrowed book
* `GET /api/user/:id/borrowed` → Get borrowed books by a user

---

## 🛠️ Installation & Setup

### 1. Clone the repo

```bash
git clone https://github.com/Rvkarthi/NM_PROJECT.git
cd NM_PROJECT
```

### 2. Install dependencies

```bash
cd backend
npm install
```

### 3. Setup environment variables

Create a `.env` file inside `backend/` with the following:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
EMAIL_USER=your_email@example.com   # (for email)
EMAIL_PASS=your_password
```

### 4. Run the server

```bash
npm start
```

---

## ✅ Testing

Use **Postman** or **Thunder Client** to test the APIs



