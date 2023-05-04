const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const cors = require("cors");
const chefInfo = require("./Data/chef-info.json");

app.use(cors());

app.get("/", (req, res) => {
  res.send("chef is cooking");
});

app.get("/chefInfo", (req, res) => {
  res.send(chefInfo);
});

app.get("/chefInfo/:id", (req, res) => {
  const id = req.params.id;
  const specificChef = chefInfo.find((info) => info.id == id);
  res.send(specificChef);
});

app.listen(port, () => {
  console.log(`my port is ${port}`);
});
