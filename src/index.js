const express = require("express");
const app = express();

require("./database");

app.use(require("./routes"));
app.listen(3020);

console.log("server on port: 3020");
