require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const tasks = require('./routes/tasks');
const app = express();

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to MongoDB successfully...yay!'))
  .catch(() => console.error('Could not connect to MongoDB ... sorry...  '));

app.use(express.json());
app.use('/api/tasks', tasks);

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server running on port ${PORT}... \\O/`));
