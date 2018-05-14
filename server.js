const express = require('express')
const path = require('path')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/', require('./routes').route)

app.listen(4000, () => console.log('Server started at http://localhost:4000'))
