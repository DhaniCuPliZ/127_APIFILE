const express = require('express');
const connectionDatabase = require('./config/db');
const apiRoute = require('./routes/api');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', apiRoute);

async function startServer() {
  await connectionDatabase();
    app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
}

startServer();  