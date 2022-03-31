// ************ Require's ************
const createError = require('http-errors');
const cookieParser = require('cookie-parser');
const express = require('express');
const logger = require('morgan');
const session = require('express-session')
const isSession = require('./middlewares/isSession');
// ************ express() - (don't touch) ************
const app = express();

// ************ Middlewares - (don't touch) ************  // Necesario para los archivos estáticos en el folder /public
app.use(express.urlencoded({ extended: false }));
app.use(logger('dev'));
app.use(express.json());
app.use(cookieParser());

app.use(session({
    secret: "authSecret",
    resave: false,
    saveUninitialized: true,
    // cookie: { maxAge: 600000 }
}))
// ************ WRITE YOUR CODE FROM HERE ************
// ************ Route System require and use() ************
const mainRouter = require('./routes/main'); // Rutas main
const authRouter = require('./routes/auth'); // Rutas main
const accountRouter = require('./routes/account'); // Rutas main


app.use('/auth', authRouter);

// app.use(isSession)
// app.use('/', mainRouter);
app.use('/account', accountRouter);




// ************ DON'T TOUCH FROM HERE ************
// ************ catch 404 and forward to error handler ************
app.use((req, res, next) => next(createError(404)));

// ************ error handler ************
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.path = req.path;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json(err);
});

// ************ exports app - dont'touch ************
module.exports = app;
