const db = require('../models')

//create main model 
const Article = db.articles
const Tip = db.tips

// 1. create article 

const addArticle = async(req, res) => {

    let information = {
        judul: req.body.judul,
        isi: req.body.isi
    }

    const article = await Article.create(information)
    res.status(200).send(article)
    console.log(article)
}

// 2. get all article 

const getAllArticle = async(req, res) => {
    let articles = await Article.findAll({
        attributes : [
            'judul',
            'isi'
        ]
    })
    res.status(200).send(articles)
}

// 3. get single article 

const getOneArticle = async(req, res) => {
    let id = req.params.id
    let article = await Article.findOne({ where : {id:id}})
    res.status(200).send(article)
}

// 4. update article 

const updateArticle= async(req, res) => {
    let id = req.params.id
    const article = await Article.update(req.body, {where: {id:id}})
    res.status(200).send(article)
}

// 5. delete article 

const deleteArticle = async(req, res) => {
    let id = req.params.id
    await Article.destroy({where: {id:id}})
    res.status(200).send('Artikel berhasil dihapus')
}

module.exports = {
    addArticle,
    getAllArticle,
    getOneArticle,
    updateArticle, 
    deleteArticle
}



