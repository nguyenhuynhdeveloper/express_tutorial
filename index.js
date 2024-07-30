// Code theo Chat GPT 

// Để chạy server lên 
// npm start  
// node index.js

const express = require('express');
const http = require('http');
const WebSocket = require('ws');

const app = express();
const port = 3000;

// Tạo HTTP server
const server = http.createServer(app);

// Tạo WebSocket server
const wss = new WebSocket.Server({ server });

// Middleware để xử lý JSON
app.use(express.json());

// Endpoint GET cơ bản
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Xử lý kết nối WebSocket
wss.on('connection', (ws) => {
  console.log('New client connected');

  // Gửi thông điệp khi kết nối được thiết lập
  ws.send('Welcome to the WebSocket server!');

  // Xử lý thông điệp từ client
  ws.on('message', (message) => {
    console.log(`Received: ${message}`);
    // Gửi lại thông điệp cho client
    ws.send(`You sent: ${message}`);
  });

  // Xử lý khi client ngắt kết nối
  ws.on('close', () => {
    console.log('Client disconnected');
  });
});

// Bắt đầu HTTP và WebSocket server
server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
