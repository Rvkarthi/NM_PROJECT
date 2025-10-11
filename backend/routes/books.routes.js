import { Router } from "express";
import { allBooks, createBook, borrowBook, userDetails, updateBook } from "../controllers/book.controller.js";

const bookRouter = Router()
// check available books
bookRouter.get('/all-books', allBooks)

// create book
bookRouter.post('/create-book', createBook)

// borrow
bookRouter.put('/borrow-book', borrowBook)

//single user borrow details
bookRouter.post('/user', userDetails)

//single user borrow details
bookRouter.post('/update-book', updateBook)


export default bookRouter