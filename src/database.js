const mongoose = require("mongoose");

mongoose
  .connect("mongodb://mongo/pilot")
  .then((db) => console.log("db is connected to ", db.connection.host))
  .catch((err) => console.log(err));
