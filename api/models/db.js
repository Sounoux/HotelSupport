const mongoose = require("mongoose");
const chalk = require("chalk");
const ora = require("ora");

const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
};

const url = "mongodb://localhost:27017/hotel-support";
mongoose.connect(url, options);

var spinner = ora("Trying to connect to the databse...\n").start();
var connectionOpened = false;

mongoose.connection.on("connecting", function () {
  spinner.start();
});

mongoose.connection.on("error", function (error) {
  spinner.stop();
  console.error(
    chalk.bgKeyword("orange").black(" ERROR "),
    chalk.keyword("orange")("Error in MongoDB connection: " + error)
  );
});

mongoose.connection.on("connected", function () {
  spinner.stop();
  console.error(
    chalk.bgGreen.black("   CONNECTED   "),
    chalk.green("Connection to the database successfully established.")
  );
});

mongoose.connection.on("open", function () {
  connectionOpened = true;
});

mongoose.connection.on("reconnected", function () {});

mongoose.connection.on("disconnected", function () {
  if (connectionOpened) {
    console.log(
      chalk.bgRed.black("   DISCONNECTED   "),
      chalk.red("Connection to the database lost.")
    );
    spinner = ora("Trying to reconnect to the database...\n").start();
  }
});

module.exports = mongoose.connection;
