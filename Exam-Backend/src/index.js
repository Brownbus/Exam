const PORT = 8080;
const express = require('express');
const mongoose = require('mongoose');
const { correctHeader } = require('./middlewares/exampleMiddleware');
const app = express();
const cors = require('cors');

mongoose.connect(process.env.CONNECTION_STRING, {
  useNewUrlParser: true,
  useCreateIndex: true,
  dbName: 'ExamDB',
});

app.use(cors());
app.options('*', cors());
app.use(correctHeader);
app.use(express.json());

const router = require('./routes/index');

app.use(router);

app.listen(PORT, () => {
  console.log(`Port is listening on ${PORT}`);
});

module.exports = app;