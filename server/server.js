import express from 'express';
import movieData from './api.js'
import cors from 'cors'
const app = express();
const port = 8080;

app.use(cors())
app.get('/moviedata', (req, res) => {
  res.json(movieData);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});