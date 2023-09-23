import mongoose from "mongoose";

async function con(){
     const conn = await mongoose.connect(`mongodb://127.0.0.1:27017/college`);
      console.log(`MongoDB Connected: ${conn.connection.host}`);
}

export {con};