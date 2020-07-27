const express = require("express");
const app = express();
const port = 8000;
const expressLayouts = require("express-ejs-layouts");
const db = require("./config/mongoose");

app.use(express.static("./assets"));

app.use(expressLayouts); //needs to called before routes, as after routes->controller->view, it should be declared earlier itself that layout has to be used.contacts

//extract styles and scripts from sub pages into layout
app.set("layout extractStyles", true);
app.set("layout extractScripts", true);

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
