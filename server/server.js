const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())

app.use(express.json())

const { lampTrav } = require(`./controller.js`)

app.get(`/api/hill`, lampTrav)
app.get(`/api/window`, lampTrav)
app.get(`/api/rest`, lampTrav)
app.get(`/api/moon`, lampTrav)

app.listen(4545, () => console.log(`on 4545`))