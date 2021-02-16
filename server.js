const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');
const PORT = 3002;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));


app.use(require('./routes/htmlRoutes.js'));
app.use(require('./routes/apiRoutes.js'));

app.listen(PORT, () => {
    console.log(`App listening on http://localhost:${PORT}`);
});
