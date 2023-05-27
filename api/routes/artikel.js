const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'GET resquest dari artikel'
    });
});

router.post('/', (req, res, next) => {
    res.status(201).json({
        message: 'POST resquest dari artikel'
    });
});

router.get('/:artikelId', (req, res, next) => {
    const id = req.params.artikelId;
        res.status(200).json({
            message: 'Halaman Isi Artikel ',
        });
    
});

router.patch('/:artikelId', (req, res, next) => {
    const id = req.params.artikelId;
        res.status(200).json({
            message: 'Artikel berhasil di update! ',
        });
    
});

router.delete('/:artikelId', (req, res, next) => {
    const id = req.params.artikelId;
        res.status(200).json({
            message: 'Artikel berhasil di hapus! ',
        });
    
});

module.exports= router;

