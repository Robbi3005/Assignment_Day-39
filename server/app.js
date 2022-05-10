const express = require('express');
const merchantRoutes = require('./routes/merchants');
const productRoutes = require('./routes/products');
const { errorHandler, verifyToken } = require('./middleware')
const authHandlers = require('./handlers/auth')
const mathHandlers = require('./handlers/math')
const dateHandlers = require('./handlers/math')

//---------------------------------------------------------------------------------------------------------------------

const app = express();

app.use(express.json());

//---------------------------------------------------------------------------------------------------------------------

app.get('/is-weekend',  dateHandlers.str)
app.get('/leap-year',  dateHandlers.str)

//---------------------------------------------------------------------------------------------------------------------

app.use(errorHandler);
app.use('*', (req, res, next) => {
    res.status(404).json({ error: `unknown route` });
});

//---------------------------------------------------------------------------------------------------------------------

module.exports = app;