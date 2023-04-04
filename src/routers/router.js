const express = require('express')
const router = express.Router()
const controller = require('../controllers/controller')

router.get('/screens/:id', controller.getScreenById)
router.post('/ticket', controller.createTicket)


module.exports = router