const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 8080;
const db = require("./data/db.js");
const pacientesRouter = require("./routes/router.js");

app.use(cors());
app.use(express.json());
app.use("/pacientes", pacientesRouter);

const conexionDb = async (req, res) => {
  try {
    await db.authenticate();
    console.log("Conexión a la base de datos existosa.");
  } catch (error) {
    console.log(error.messaje);
  }
};

app.listen(PORT, () => {
  conexionDb();
  console.log(`Conectado al puerto ${PORT}`);
});
