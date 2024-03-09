const db = require('../db.json')
const list = require('../list.json')


module.exports = {
    // lampTrav: (req, res) => {
    //     const place = req.url
    //     console.log('hit')
    //     return db[place]
    // },
  
    getBabes: (req, res) => {
        console.log(`controller babas`)
        res.status(200).send(list)
    },

    addBabes: (req, res) => {
        const babe = req.body.babe
        list.push(babe)
        res.status(200)
    },

    removeBabe: (req, res) => {
        const id = req.params.id

        const index = list.findIndex(babe => {
            return babe.id === +id
        })
        list.splice(index, 1)
        res.status(200).send(list)
    }

}

