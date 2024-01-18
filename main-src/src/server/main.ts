import axios from "axios";
import express from "express";
import ViteExpress from "vite-express";

const app = express();

app.use(express.json());

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
