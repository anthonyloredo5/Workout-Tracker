const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');

const PORT = process.env.PORT || 3002;

const app = express();
dotenv.config();

//middle for mongoose
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));


app.use(require('./routes/htmlRoutes.js'));
app.use(require('./routes/apiRoutes.js'));

//db connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/fierce-tor-31009', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
})
  .then(() => app.listen(PORT, () => console.log(`App listening on http://localhost:${PORT}`)))
  .catch((error) => console.log(error.message));
