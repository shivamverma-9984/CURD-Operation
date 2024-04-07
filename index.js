const express = require("express");
const app = express();

const port = 4000;

const route=require("./Route/route.js")

require("./db/connection.js");

app.use(express.json());

app.use("/user",route)


app.listen(port, () => {
  console.log(`server connected sucessfully ${port}`);
});
