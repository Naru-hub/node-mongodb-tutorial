const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();

const foodRouter = require("./routes/foodRoutes");

app.use(foodRouter);

// データベース接続
mongoose
  .connect(process.env.MONGOURL)
  .then(() => console.log("データベース接続に成功しました"))
  .catch((err) => console.log(err));

app.listen(3000, () => {
  console.log("サーバーが起動しました");
});
