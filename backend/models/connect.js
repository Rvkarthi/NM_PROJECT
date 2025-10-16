import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config()
export const connectDb = async ()=>{
		try{
			await mongoose.connect(process.env.mongodb_url)
			console.log("mongo db is connected successfully")
		}
		catch(error)
		{
			console.log(error.message)
			process.exit(1)
		}
}