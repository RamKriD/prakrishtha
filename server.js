const express = require("express");

const port = process.env.port || 5000;

const baseApp = express();

const utkrishth = require('./server/utkrishth')

baseApp.set('view engine', 'html');
baseApp.engine('html', require('ejs').renderFile);

baseApp.use(express.static(__dirname + "/client/dist"));

baseApp.use("/utkrishth", utkrishth);

baseApp.get("*", (req, res) => {
  res.render(__dirname + "/client/dist/index");
});

baseApp.listen(port, () => {
  console.log("base app listening on port 5000");
});
