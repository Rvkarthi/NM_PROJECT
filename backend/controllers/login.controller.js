import { Users } from '../models/loginModel.js'
import { Books } from "../models/books.js"

// create user
export const createUser = async (req, res) =>{
    try {
        const body = req.body;
        console.log(body)
        const response = await Users.create(body)
        console.log("response", response)
        res.status(200).json({"message": "working", "user created": response})
    } catch (error) {
        res.status(404).json({"message": error.message})
    }
}

// get user login
export const getUser = async (req, res) =>{
    try {
        const {username, password} = req.body;
        const response = await Users.findOne({'username': username})
        if(!response)
        {
            res.status(404).json({"message": "username not found", "success": "false"})
        }
        const responsePass = response.password === password
        if(!responsePass)
        {
            res.status(404).json({"message": "password is wrong", "success": "false"})
        }
        res.status(200).json({"message": "user found", "success": "true"})
        console.log("user login ", username, password)
    } catch (error) {
        res.status(404).json({"message": error.message, "success": "false"})
    }
}

export const getUsersWithBooks = async (req, res) => {
  try {
    const users = await Users.find({ "borrow.books": { $exists: true, $ne: null } });
    const data = [];

    for (const user of users) {
      const book = await Books.findById(user.borrow.books);
      data.push({
        username: user.username,
        bookTitle: book ? book.title : "Unknown",
        dueDate: user.borrow.deadline || "-"
      });
    }

    res.status(200).json({ success: true, data });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// get all user
export const getAllUser = async (req, res) =>{
    try {
        
        const response = await Users.find()
        if(!response)
        {
            res.status(404).json({"message": "usernames not found", "success": "true"})
        }
        console.log(response)
        res.status(200).json({"message": "user found", "success": "true", data: {"usernames": response.map((item)=> item.username)}})
        console.log("user login ", username, password)
    } catch (error) {
        res.status(404).json({"message": error.message, "success": "false"})
    }
}