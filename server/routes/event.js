const express = require("express")
const Event = require("../models/event")
const router = express.Router()

router
.get('/getEvents', async (req, res) => {
  try {
    const events = await User.getAllEvents()
    res.send(events)
  } catch(err) {
    res.status(401).send({message: err.message})
  }
})

.post('/create', async(req, res) => {
  try {
    let event = await Event.create(req.body)
    res.send({...user, Password: undefined})
  } catch(err) {
    res.status(401).send({message: err.message})
  }
})

.delete('/delete', async(req, res) => {
  try {
    let event = await User.deleteAccount(req.body)
    res.send({success: "We will miss you! :("})
  } catch(err) {
    res.status(401).send({message: err.message})
  }
})

module.exports = router