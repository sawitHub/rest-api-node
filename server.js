const express = require('express')
const cors = require('cors')

const app = express()

var corOptions = {
    origin : 'https://localhost:8080'
}

//middleware 
app.use(cors(corOptions))
app.use(express.json())
app.use(express.urlencoded({extended: true}))

//routers 
const router = require('./routes/articleRoutes.js')
app.use('/api/articles', router)

//test api 
app.get('/', (req,res)=> {
    res.json({message : 'api running'})
})

//port 
const PORT = process.env.PORT || 8080

//server 
app.listen(PORT, () => {
    console.log(`server berjalan pada port ${PORT}` )
})

