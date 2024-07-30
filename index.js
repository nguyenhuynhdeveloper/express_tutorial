// Code theo Chat GPT 

// Để chạy server lên 
// npm start  
// node index.js

const express = require('express');
const app = express();
const port = 3000;

// Middleware để xử lý JSON
app.use(express.json());

// Endpoint GET
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Endpoint POST
app.post('/data', (req, res) => {
  const data = req.body;
  res.send(`You sent: ${JSON.stringify(data)}`);
});

// Endpoint GET với tham số URL
app.get('/user/:id', (req, res) => {
  const userId = req.params.id;
  res.send(`User ID: ${userId}`);
});

// Bắt đầu server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});



// Middleware để log các yêu cầu
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Middleware để xử lý lỗi
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});
