import mongoose from "mongoose";

const loginSchema = mongoose.Schema({
    "username": {
        type: String,
        unique: true,
        required: true
    },
    "password": {
        type: String,
        required: true
    },
    borrow: {
        books: { type: mongoose.Schema.Types.ObjectId, ref: "books" },
        borrowedAt: { type: String},
        deadline: { type: String }
    }
})

export const Users = mongoose.model("Users",loginSchema)