const fs = require("fs");
const initDb = () => {
  let data = fs.readFileSync("./database/data.json");
  data = JSON.parse(data);
  return data;
};

module.exports = {
  initDb,
};
