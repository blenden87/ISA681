
const express = require('express')
const bodyparser = require('body-parser')
const cors = require('cors')

cont app = express()

app.use(morgan('combine'))
app.use(bodyparser.json())
app.use(cors())
