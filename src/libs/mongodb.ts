import mongoose from 'mongoose'

export default async function connectMongoDB() {
  try {
    await mongoose.connect("mongodb+srv://user1:wornjs1002@cluster0.bmmv9.mongodb.net/test")
    console.log('Connected to MongoDB')
  } catch (error) {
    console.error(error)
  }
  console.log('MongoDB URI:', process.env.MONGODB_URI);
}
