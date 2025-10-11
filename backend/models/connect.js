import mongoose from "mongoose"

export const connectDb = async ()=>{
		try{
			await mongoose.connect("mongodb://localhost:27017")
			console.log("mongo db is connected successfully")
		}
		catch(error)
		{
			console.log(error.message)
			process.exit(1)
		}
}