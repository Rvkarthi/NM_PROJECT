import { Router } from "express";
import { createUser, getUser, getAllUser, getUsersWithBooks, getBorrowedBooksByUser } from "../controllers/login.controller.js";

const loginRouter = Router()

//create account
loginRouter.post('/signup', createUser)

//login
loginRouter.post("/login", getUser)

//get all users
loginRouter.get("/all-users", getAllUser)

//get all users with book
loginRouter.get("/users-with-books", getUsersWithBooks)


loginRouter.get("/borrow/:username", getBorrowedBooksByUser)



export default loginRouter