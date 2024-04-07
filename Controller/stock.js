const { initDb } = require("../database");
const DATA = initDb();
const getStocks = (req, res) => {
  const stocks = DATA;
  res.status(200).json(stocks);
};
const getStock = (req, res) => {
  const stock = DATA.find((item) => item.id === parseInt(req.params.id));
  if (stock) return res.status(200).json(stock);

  res.status(404);
  throw new Error("Not found");
};
module.exports = {
  getStocks,
  getStock,
};
