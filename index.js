const express = require('express');
const connectDB = require('./DataBase');
const routes = require('./Routes');

const app = express();

connectDB();

app.use(express.json());

app.use('/api', routes);

const PORT = 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));