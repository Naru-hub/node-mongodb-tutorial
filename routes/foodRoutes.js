const express = require("express");
const app = express();
const foodModel = require("../models/Food");

app.use(express.json());

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

// データの作成
app.post("/food", async (req, res) => {
  const food = new foodModel(req.body);

  try {
    await food.save();
    res.send(food);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = app;