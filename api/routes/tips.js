const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'GET Request dari Tips'
    });
});

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'POST Request dari Tips'
    });
});

router.post('/', (req, res, next) => {
    res.status(201).json({
        message: 'Tips berhasil di post'
    });
});

router.get('/:tipsID', (req, res, next) => {
    res.status(200).json({
        message: 'Halaman isi Tips',
    });
});

router.patch('/:tipsID', (req, res, next) => {
    res.status(200).json({
        message: 'Tips di Update',
    });
});

router.delete('/:tipsID', (req, res, next) => {
    res.status(200).json({
        message: 'Tips berhasil dihapus',
    });
});


module.exports= router;

