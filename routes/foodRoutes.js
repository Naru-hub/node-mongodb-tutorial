const express = require("express");
const app = express();
const foodModel = require("../models/Food");

// データの取得
app.get("/foods", async (req, res) => {
  // データベースの中のデータを全て返す
  const foods = await foodModel.find({});

  try {
    res.send(foods);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = app;