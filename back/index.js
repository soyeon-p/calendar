const express = require('express');
const cors = require('cors');

const weatherRouter = require('./routes/weather');
const dustRouter = require('./routes/dust');

const app = express();

app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use('/weather', weatherRouter)
app.use('/dust', dustRouter);

app.listen(3065, () => {
  console.log('server start - 3065');
});
