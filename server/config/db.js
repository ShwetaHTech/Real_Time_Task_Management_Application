import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(
            "mongodb+srv://taskUser:taskUser123@taskclustor.78mayli.mongodb.net/?appName=taskClustor"
        );
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.log("MongoDB connection error:", error);
    }
};

export default connectDB;



 