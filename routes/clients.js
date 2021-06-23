const {
  Router
} = require('express');
const clientModel = require('../models/Client')
const router = Router();

router.get('/', async (req, res) => {
  try {
    const clients = await clientModel.find()
      .populate('providers').exec();
    res.send(clients)
  } catch (error) {
    res.status(404)
    res.send({
      error: "Clients cannot be retrived!"
    })
  }
})

router.post('/', async (req, res) => {
  try {
    const client = new clientModel({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      providers: req.body.providers,
    })
    await client.save();
    res.send(client)
  } catch (error) {
    res.status(404)
    res.send({
      error: "Something went wrong at user creation!"
    })
  }
 
})
router.delete('/', async (req, res) => {
  try {
    const client = new clientModel({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      providers: req.body.providers,
    })
    await client.save();
    res.send(client)
  } catch (error) {
    res.status(404)
    res.send({
      error: "Client cannot be deleted!"
    })
  }
 
})
router.patch('/:id', async (req, res) => {
  try {
    const client = await clientModel.findOne({
      _id: req.params.id
    })

    if (req.body.email) {
      client.email = req.body.email
    }
    if (req.body.phone) {
      client.phone = req.body.phone
    }
    if (req.body.providers) {
      client.providers = req.body.providers
    }

    await client.save()
    res.send(client)
  } catch {
    res.status(404)
    res.send({
      error: "Client doesn't exist!"
    })
  }
})

router.delete("/:id", async (req, res) => {
  try {
    await clientModel.deleteOne({
      _id: req.params.id
    })
    res.status(204).send()
  } catch {
    res.status(404)
    res.send({
      error: "Client doesn't exist!"
    })
  }
})

module.exports = router;