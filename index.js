const express = require("express");
const app = express();
const port = 8000;

// use express router
app.use("/", require("./routes"));

//view engine
app.set("view engine", "ejs");
app.set("views", "./views");

app.listen(port, function (err) {
  if (err) {
    console.log(`Error in running the server: ${port}`); //backtick- includes variables within the string
  } else {
    console.log(`Express server is running on port: ${port}`);
  }
});
