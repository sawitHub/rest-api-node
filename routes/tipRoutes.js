const tipController = require('../controllers/tipController.js')
const router = require('express').Router()

//list router
router.post('/addTip', tipController.addTip)
router.get('/allTip', tipController.getAllTip)
router.get('/:id', tipController.getOneTip)
router.put('/:id', tipController.updateTip)
router.delete('/:id', tipController.deleteTip)

module.exports = router
