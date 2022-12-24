const express = require('express')
const cors = require('cors');
const dotenv = require('dotenv').config()
const app = express()
const PORT =  process.env.PORT;


// load the cookie-parsing middleware


app.use(express.json())
app.use(cors())




app.use('/api', require('./router/index'))


app.listen(PORT , () => console.log(PORT))




