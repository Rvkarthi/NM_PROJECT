import { Books } from "../models/books.js"
import { Users } from "../models/loginModel.js"
import { format, addDays } from "date-fns"
import nodemailer from "nodemailer";

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
export const updateBook = async (req, res) => {
  try {
    // Destructure from request body
    const { bookId, title, author, quantity } = req.body;

    if (!bookId) {
      return res.status(400).json({ message: "bookId is required", success: false });
    }

    const updatedBook = await Books.findOneAndUpdate(
      { _id: bookId },
      { title, author, quantity },
      { new: true } // return the updated document
    );

    if (!updatedBook) {
      return res.status(404).json({ message: "Book not found", success: false });
    }

    res.status(202).json({ data: updatedBook, success: true });
  } catch (error) {
    res.status(500).json({ message: error.message, success: false });
  }
};

//borrow book
// Borrow book and send email
export const borrowBook = async (req, res) => {
  try {
    const { bookTitle, username } = req.body;
    if (!bookTitle || !username) {
      return res.status(400).json({ message: "Book title and username are required", success: false });
    }

    // Find the book by title
    const book = await Books.findOne({ title: bookTitle });
    if (!book) {
      return res.status(404).json({ message: "Book not found", success: false });
    }

    // Check if the book is available
    if (book.quantity <= 0) {
      return res.status(400).json({ message: "Book is out of stock", success: false });
    }

    // Decrement book quantity
    book.quantity -= 1;
    await book.save();

    // Add borrow record to user
    const date = new Date();
    const borrowDetail = await Users.findOneAndUpdate(
      { username },
      {
        borrow: {
          books: book._id,
          borrowedAt: format(date, "dd/MM/yyyy"),
          deadline: format(addDays(date, 30), "dd/MM/yyyy"),
        },
      },
      { new: true }
    );

    if (!borrowDetail) {
      return res.status(404).json({ message: "User not found", success: false });
    }

    // Send email to user
    if (borrowDetail.email) {
      const transporter = nodemailer.createTransport({
        service: "gmail", // or your email provider
        auth: {
          user: process.env.EMAIL_USER, // your email
          pass: process.env.EMAIL_PASS, // your email password or app password
        },
      });

      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: borrowDetail.email,
        subject: `Book Borrowed: ${book.title}`,
        html: `
          <p>Hi ${borrowDetail.username},</p>
          <p>You have successfully borrowed the book <strong>${book.title}</strong>.</p>
          <p>Borrowed At: ${format(date, "dd/MM/yyyy")}</p>
          <p>Deadline: ${format(addDays(date, 30), "dd/MM/yyyy")}</p>
          <p>Thank you for using our library!</p>
        `,
      };

      transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
          console.error("Email not sent:", err);
        } else {
          console.log("Email sent:", info.response);
        }
      });
    }

    res.status(202).json({ data: borrowDetail, success: true });

  } catch (error) {
    res.status(500).json({ message: error.message, success: false });
  }
};


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

// delete book
export const deleteBook = async (req,res) =>{
    try {
        const {book_id} = req.body
        const response = await Books.deleteOne({_id: book_id})
        res.status(200).json({message: 'deleted successfully', success: true})
    } catch (error) {
        res.status(404).json({message: error.message, success: false})
    }
}