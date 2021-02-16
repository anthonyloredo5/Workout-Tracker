const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors =  require('cors');

const PORT = process.env.PORT || 3002;
const CONNECTION_URL = 'mongodb+srv://anthonyloredo5:anthonyloredo5123@cluster0.ts5pj.mongodb.net/<dbname>?retryWrites=true&w=majority';

const app = express();

//middle for mongoose
app.use(bodyParser.json({ limit:"30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit:"30mb", extended: true }));
app.use(cors());

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));


app.use(require('./routes/htmlRoutes.js'));
app.use(require('./routes/apiRoutes.js'));

//db connection
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => app.listen(PORT, () => console.log(`App listening on http://localhost:${PORT}`)))
.catch((error) => console.log(error.message));

mongoose.set('useFindAndModify', false);
