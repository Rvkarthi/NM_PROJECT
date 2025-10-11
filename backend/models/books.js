import mongoose from "mongoose";

const booksSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    quantity: {type: Number, default: 0}
})

export const Books = mongoose.model("Books", booksSchema)