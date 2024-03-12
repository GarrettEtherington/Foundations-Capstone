const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())

app.use(express.json())

const { getBabes, addBabes, removeBabe, findBabe, updateBabe } = require(`./controller.js`)

app.get(`/api/babes`, getBabes)
app.get(`/api/findbabe/:id`, findBabe)
app.post(`/api/babes`, addBabes)
app.delete(`/api/babes/:id`, removeBabe)
app.put(`/api/babes/:id`, updateBabe)
// app.get(`/api/chad`, becomeChad)

app.listen(4545, () => console.log(`on 4545`))