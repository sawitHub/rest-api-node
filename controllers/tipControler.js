const db = require('../models')

//create main model 
const Article = db.articles
const Tip = db.tips

// 1. create tip 

const addTip = async(req, res) => {

    let information = {
        judul: req.body.judul,
        isi: req.body.isi
    }

    const tip = await Tip.create(information)
    res.status(200).send(tip)
    console.log(tip)
}

// 2. get all tip 

const getAllTip = async(req, res) => {
    let tips = await Tip.findAll({
        attributes : [
            'judul',
            'isi'
        ]
    })
    res.status(200).send(tips)
}

// 3. get single tip 

const getOneTip = async(req, res) => {
    let id = req.params.id
    let tip = await Product.findOne({ where : {id:id}})
    res.status(200).send(tip)
}

// 4. update tip 

const updateTip= async(req, res) => {
    let id = req.params.id
    const tip = await Tip.update(req.body, {where: {id:id}})
    res.status(200).send(tip)
}

// 5. delete tip 

const deleteTip = async(req, res) => {
    let id = req.params.id
    await Tip.destroy({where: {id:id}})
    res.status(200).send('Tips berhasil dihapus')
}

module.exports = {
    addTip,
    getAllTip,
    getOneTip,
    updateTip, 
    deleteTip
}



