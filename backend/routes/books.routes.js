import { Router } from "express";
import { allBooks, createBook, borrowBook, userDetails, updateBook, deleteBook} from "../controllers/book.controller.js";

const bookRouter = Router()
// check available books
bookRouter.get('/all-books', allBooks)

// create book
bookRouter.post('/create-book', createBook)

// borrow
bookRouter.post('/borrow-book', borrowBook)

//single user borrow details
bookRouter.post('/user', userDetails)

//single user borrow details
bookRouter.put('/update-book', updateBook)

//delete book
bookRouter.delete('/delete-book', deleteBook)



export default bookRouter