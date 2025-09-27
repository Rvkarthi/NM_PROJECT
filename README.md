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
├── frontend/ (optional if React/HTML UI is added)
│   ├── src/components/
│   ├── src/pages/
│   ├── src/services/  # API integration
│   └── App.js
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
git clone https://github.com/your-username/library-book-management.git
cd library-book-management
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
EMAIL_USER=your_email@example.com   # (optional for reminders)
EMAIL_PASS=your_password
```

### 4. Run the server

```bash
npm start
```

---

## ✅ Testing

Use **Postman** or **Thunder Client** to test the APIs:

* Add a book → Issue → Return → Check availability updates

---

## 📌 Future Enhancements

* Add JWT authentication for users & admins
* Build a React/Tailwind UI
* Email/SMS reminders for due dates
* Dashboard with book statistics

---

## 🤝 Contributing

Pull requests are welcome! For major changes, open an issue first to discuss what you would like to change.

---

## 📜 License

This project is licensed under the MIT License.

---
