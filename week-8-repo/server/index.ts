
import express from "express";
import mongoose from "mongoose";
const app = express();

const port = 3000;
import authRoutes from "./routes/auth";
import todoRoutes from "./routes/todo";
import cors from "cors";

app.use(cors());
app.use(express.json());
app.use("/auth", authRoutes);
app.use("/todo", todoRoutes);

mongoose.connect('mongodb://127.0.0.1:27017/courses', { dbName: 'courses' })
  .then(() => {
    console.log('Connected to MongoDB');
    
    // Start the Express server
    app.listen(port, () => {
      console.log(`Example app listening at http://localhost:${port}`);
    });
  })
  .catch(error => {
    console.error('MongoDB connection error:', error);
  });