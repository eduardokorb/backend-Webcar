const express = require("express");

const Modelo = require("../models/modelo");

const router = express.Router();

router.post("/registro", async (req, res) => {
  try {
    const Modelo = await Modelo.create(req.body);

    return res.send({ modelo });
  } catch (err) {
    return res.status(400).send({ error: "Falha de Registro" });
  }
});

module.exports = (app) => app.use("/auten", router);
