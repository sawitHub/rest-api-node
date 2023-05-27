const express = require('express');
const app = express();
const artikelRoutes = require('./api/routes/artikel');
const tipsRoutes = require('./api/routes/tips');


// app.use((req, res, next) => {
//     res.status(200).json({
//         message: 'Server Jalan'
//     });
// });

app.use('/artikel', artikelRoutes);
app.use('/tips', tipsRoutes); 

app.use((req, res, next) => {
    const error = new Error('Halaman tidak ada');
    error.status(404);
    next(error);
})

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

module.exports = app;
