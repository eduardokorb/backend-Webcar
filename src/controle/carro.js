const express = require("express");

const Modelo = require("../models/modelo");

const router = express.Router();

router.post("/registro", async (req, res) => {
  try {
    const carro = await Modelo.create(req.body);

    return res.send({ carro });
  } catch (err) {
    return res.status(400).send({message: 'Não foi possível adicionar!' });
  }
});

router.get("/registro", async (req, res) => {
  try {
  const carro = await Modelo.find();

  return res.json(carro);
  } catch (err) {
    return res.status(400).send({message: 'Não localizado!'});
  }  
});

router.delete("/registro/:id", async(req, res) => {
  try{
  const carro = await Modelo.findById(req.params.id);
  await carro.remove();
  return res.send();
  }catch (err){
    return res.status(400).send({message: 'Não foi possível deletar!'});
  }
});


module.exports = (app) => app.use("/auten", router);
