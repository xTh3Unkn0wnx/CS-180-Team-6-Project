import axios from "axios";
import express from "express";
import ViteExpress from "vite-express";
import mongoose, { ConnectOptions } from "mongoose";
import dotenv from "dotenv"
import cors from 'cors';
import router from './routes/exercise.js'

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const URI = process.env.MONGODB_URL;
console.log(URI);
if(URI) {
  mongoose.connect(URI)
    const connection = mongoose.connection;
    connection.once('open', () => {
      console.log("MongoDB database connection established successfully")
    })
} else {
  process.exit(1);
}

app.use('/exercises', router);

app.get("/api/hello", (_, res) => {
  res.send("This is my first message!");
});

app.get('/api/data',async (req, res) =>  {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1/');
    const data = response.data;
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({error: 'Internal Server Error'});
  }
})

ViteExpress.listen(app, 3000, () =>
  console.log("Server is listening on port 3000..."),
);
