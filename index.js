const express = require("express");
const conectDB = require("./config/db");
const cors = require("cors");

//Server
const app = express();

// conectar a la DB
conectDB();
app.use(cors());

app.use(express.json());

app.use("/api/productos", require("./routes/producto.routes"));

app.listen(4000, () => {
  console.log("servidor corriendo");
});
