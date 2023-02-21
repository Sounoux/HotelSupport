require("./models/db");
require("dotenv").config();
const routes = require("./routes/usersRoute");
const routesReserv = require("./routes/reservationRoute");
const error = require("./middlewares/errorMiddlewareHandler");
const roomRouter = require("./routes/roomRoute");
var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
const MongoClient = require('mongodb').MongoClient;
var logger = require("morgan");
const mongoose = require("mongoose");
var cors = require("cors");

var app = express();
const port = process.env.PORT || 5000

app.use(express.json());

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

//routes
app.use("/api/users", routes.userRouter);
app.use("/api/reservation", routesReserv.reservationRouter);
app.use("/api/rooms", roomRouter.roomRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});
//====Catch Error
app.use(error.notfoundErrorMiddleware);
app.use(error.errorMiddlewareHandler);

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

app.listen(port, () => {
  console.log('ToDo server is up on port ' + port)
})

module.exports = app;
