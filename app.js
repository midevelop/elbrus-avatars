const express = require("express");
const morgan = require("morgan");

const app = express();
app.use(morgan("dev"));

app.use(express.static(__dirname + "/public"));


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});
