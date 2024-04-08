const express = require("express");
require("dotenv").config();
const cors = require("cors");
const app = express();
const stockRoute = require("./Routes/Stock");
app.use(cors());
app.use(express.json());
app.use("/api/stocks", stockRoute);
const port = 10000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
