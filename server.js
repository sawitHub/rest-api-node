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
const article = require('./routes/articleRoutes')
app.use('/api/articles', article)

const tip = require('./routes/tipRoutes')
app.use('/api/tips', tip)


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

