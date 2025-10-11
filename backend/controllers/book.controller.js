import { Books } from "../models/books.js"
import { Users } from "../models/loginModel.js"
import { format, addDays } from "date-fns"

export const allBooks = async (req,res) =>{
    try {
        const response = await Books.find()
        if(!response)
        {
            res.status(404).json({message: "data not found", success: false})
        }
        res.status(202).json({data: response, success: true})
    } catch (error) {
        res.status(404).json({message: error.message, success: false})
    }
}

export const createBook = async (req,res) =>{
    try {
        const {title, author, quantity=0} = req.body
        const response = await Books.create({title, author})
        if(!response)
        {
            res.status(404).json({message: "enter title and author name", success: false})
        }
        res.status(201).json({message: "successfully book added", success: true})
    } catch (error) {
        
    }
}

// update book quantity
export const updateBook = async (req,res) =>{
    try {
        const {bookId, quantity} = req.body

        const response = await Users.findOneAndUpdate({_id: bookId},{quantity})
        res.status(202).json({data: response, success: true})
    } catch (error) {
        res.status(404).json({message: error.message, success: false})
    }
}

export const borrowBook = async (req,res) =>{
    try {
        const {bookId, username} = req.body
        const date = new Date()

        const borrowDetail = await Users.findOneAndUpdate({username}, {
            borrow: {
                books: bookId,
                borrowedAt: format(date, 'dd/MM/yyyy'),
                deadline: format(addDays(date,30), 'dd/MM/yyyy')
            }
        })
        res.status(202).json({data: borrowDetail, success: true})
    } catch (error) {
        res.status(404).json({message: error.message, success: false})
    }
}

// single user details
export const userDetails = async (req,res) =>{
    try {
        const {username} = req.body
        const response = await Users.findOne({username})
        res.status(200).json({data: response, success: true})
    } catch (error) {
        res.status(404).json({message: error.message, success: false})
    }
}