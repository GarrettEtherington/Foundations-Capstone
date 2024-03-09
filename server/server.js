const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())

app.use(express.json())

const { getBabes, addBabes, removeBabe } = require(`./controller.js`)

app.get(`/api/babes`, getBabes)
app.post(`/api/babes`, addBabes)
app.delete(`/api/babes/:id`, removeBabe)
app.put(`/api/babes/:id`, lampTrav)

app.listen(4545, () => console.log(`on 4545`))