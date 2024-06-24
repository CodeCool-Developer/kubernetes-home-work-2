const express = require('express');
const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');

// Load environment variables from .env file if present
dotenv.config();

const app = express();

app.get('/', (req, res) => {
	res.send("Myapp Home Works A");
});

app.get('/read-file', (req, res) => {
  const filePath = process.env.FILE_PATH || path.join(__dirname, 'example.txt');

  console.log('Attempting to read file at:', filePath);

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading the file:', err);
      return res.status(500).send('Error reading the file');
    }
    res.send(data);
  });
});

const PORT = 80;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

