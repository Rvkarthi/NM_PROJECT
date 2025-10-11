import { Router } from "express";
import { createUser, getUser } from "../controllers/login.controller.js";

const loginRouter = Router()

//create account
loginRouter.post('/signup', createUser)

//login
loginRouter.post("/login", getUser)

export default loginRouter