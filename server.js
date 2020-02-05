// import modules
const express = require("express");
const mongoose = require("mongoose");

// instantiate express
const app = express();

// enable data parse as json
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// specifiy a folder to serve static content from
app.use(express.static("public"));

// make a connection to the mongo database
const uri = process.env.MONGODB_URI || "mongodb://localhost/workout";
mongoose.connect(uri, { useNewUrlParser: true });

// import routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// start the express app
const port = process.env.PORT || 3000;
const host = process.env.HOST || "http://localhost";
app.listen(port, () => console.log(`express app is listening on ${host}:${port}`));
