
const express = require('express')
const bodyparser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()

app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

app.get('/satus',(req, res) => {
    res.send({
        message: 'hello world!'
    })
})

app.listen(proccess.env.PORT || 8081)
