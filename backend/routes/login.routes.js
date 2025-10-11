import { Router } from "express";
import { createUser, getUser, getAllUser } from "../controllers/login.controller.js";

const loginRouter = Router()

//create account
loginRouter.post('/signup', createUser)

//login
loginRouter.post("/login", getUser)

//get all users
loginRouter.get("/all-users", getAllUser)

export default loginRouter