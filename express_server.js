const express = require("express");
const app = express();
const PORT = 8080; // default port 8080
app.set("view engine", "ejs");





app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});