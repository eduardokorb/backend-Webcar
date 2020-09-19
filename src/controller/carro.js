const express = require("express");

const Modelo = require("../models/car");

const router = express.Router();

router.post("/carros", async (req, res) => {
  try {
    const carro = await Modelo.create(req.body);

    return res.send({ carro });
  } catch (err) {
    return res.status(400).send({message: 'Não foi possível adicionar!' });
  }
});

router.get("/carros", async (req, res) => {
  try {
  const carro = await Modelo.find();

  return res.json(carro);
  } catch (err) {
    return res.status(400).send({message: 'Não localizado!'});
  }  
});

router.delete("/carros/:id", async(req, res) => {
  try{
  const carro = await Modelo.findById(req.params.id);
  await carro.remove();
  return res.send();
  

}catch (err){
    return res.status(400).send({message: 'Não foi possível deletar!'});
  }
});

router.put("/carros/:id", async (req, res) => {
  try {
    const carro = await Modelo.findByIdAndUpdate(req.params.id, req.body, { new: true });

    res.status(200).send({ carro });
  } catch (err) {
    return res.status(400).send({ message: 'Erro ao fazer update!' });
  }
});

module.exports = (app) => app.use("/carro", router);
