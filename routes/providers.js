const {
    Router
  } = require('express');
  const providerModel = require('../models/Provider')
  const router = Router();

  router.get('/', async (req, res) => {
    try {
      const providers = await providerModel.find();
        res.send(providers)
    } catch (error) {
      res.status(404)
      res.send({
        error: "Providers cannot be retrieved!"
      })
    }
  })

  router.post('/', async (req, res)=> {
    try {
      const provider = new providerModel({
        name: req.body.name
      })
      await provider.save();
      res.send(provider)
    } catch (error) {
      res.status(404)
      res.send({
        error: "Provider cannot be created!"
      })
    }
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