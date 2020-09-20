const express = require("express");

const Brand = require("../models/brand");

const router = express.Router();

router.post("/marcas", async (req, res) => {
  try {
    const marca = await Brand.create(req.body);

    return res.send({ marca });
  } catch (err) {
    return res.status(400).send({message: 'Não foi possível adicionar!' });
  }
});

router.get("/marcas", async (req, res) => {
  try {
  const marca = await Brand.find();

  return res.json(marca);
  } catch (err) {
    return res.status(400).send({message: 'Não localizado!'});
  }  
});

router.delete("/marcas/:id", async(req, res) => {
  try{
  const marca = await Brand.findById(req.params.id);
  await marca.remove();
  return res.send();
  

}catch (err){
    return res.status(400).send({message: 'Não foi possível deletar!'});
  }
});

router.put("/marcas/:id", async (req, res) => {
  try {
    const marca = await Brand.findByIdAndUpdate(req.params.id, req.body, { new: true });

    res.status(200).send({ marca });
  } catch (err) {
    return res.status(400).send({ message: 'Erro ao fazer update!' });
  }
});

module.exports = (app) => app.use("/api", router);
