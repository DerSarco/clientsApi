const {
    Router
  } = require('express');
  const providerModel = require('../models/Provider')
  const router = Router();

  router.get('/', async (req, res) => {
    const providers = await providerModel.find();
      res.send(providers)
  })

  router.post('/', async (req, res)=> {
    const provider = new providerModel({
      name: req.body.name
    })
    await provider.save();
    res.send(provider)
  })
  router.delete('/', async (req, res)=> {
    const provider = new providerModel({
      name: req.body.name,
    })
    await provider.save();
    res.send(provider)
  })


  router.delete("/:id", async (req, res) => {
    try {
      await providerModel.deleteOne({ _id: req.params.id })
      res.status(204).send()
    } catch {
      res.status(404)
      res.send({ error: "Provider doesn't exist!" })
    }
  })

  module.exports = router;