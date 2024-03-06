const express = require('express')
const cors = require('cors')

const {lampTrav} = require(`./controller.js`)

const app = express()
app.use(express.json())
app.use(cors())

app.get(`/api/travel`, lampTrav)

app.listen(4545, () => console.log(`on 4545`))