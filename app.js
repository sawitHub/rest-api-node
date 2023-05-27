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
app.use('/tips', tipsRoutes)


module.exports = app;
