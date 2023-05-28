const articleController = require('../controllers/articleController.js')
const router = require('express').Router()

//list router
router.post('/addArticle', articleController.addArticle)
router.get('/allArticle', articleController.getAllArticle)
router.get('/:id', articleController.getOneArticle)
router.put('/:id', articleController.updateArticle)
router.delete('/:id', articleController.deleteArticle)

module.exports = router
