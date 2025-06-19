const express = require('express');
const http = require('http');
const WebSocket = require('ws');
const path = require('path');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

let content = ""; // Shared document content

wss.on('connection', (ws) => {
  console.log("A user connected");

  // Send current content to the newly connected client
  ws.send(JSON.stringify({ type: 'init', content }));

  // Broadcast incoming changes to all clients
  ws.on('message', (message) => {
    const data = JSON.parse(message);

    if (data.type === 'update') {
      content = data.content; // Update server copy
      wss.clients.forEach(client => {
        if (client !== ws && client.readyState === WebSocket.OPEN) {
          client.send(JSON.stringify({ type: 'update', content }));
        }
      });
    }
  });

  ws.on('close', () => {
    console.log("A user disconnected");
  });
});

app.use(express.static(path.join(__dirname, 'public')));

server.listen(3000, () => {
  console.log("Server started on http://localhost:3000");
});
