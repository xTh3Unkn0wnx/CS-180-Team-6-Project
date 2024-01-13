const express = require('express');
const http = require('http');
// const path = require('path');
const app = express();
const server = http.createServer(app);

const PORT = process.env.PORT || 3001;

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});