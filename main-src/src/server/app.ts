// import axios from "axios";
import express, { Response, Request } from "express";
// import ViteExpress from "vite-express";
// import mongoose, { ConnectOptions } from "mongoose";
// import dotenv from "dotenv";
import cors from 'cors';
import exerciseRouter from './routes/exercise';
import mealRouter from './routes/meal';
import userRouter from './routes/user';

// dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// const URI = process.env.MONGODB_URL;
// if(URI) {
//   mongoose.connect(URI)
//     const connection = mongoose.connection;
//     connection.once('open', () => {
//       console.log("MongoDB database connection established successfully")
//     })
// } else {
//   console.log("Could not connect to MongoDB");
// }

app.use('/exercises', exerciseRouter);
app.use('/meals', mealRouter);
app.use('/users', userRouter);

// ViteExpress.listen(app, 3000, () =>
//   console.log("Server is listening on port 3000..."),
// );

export default app;