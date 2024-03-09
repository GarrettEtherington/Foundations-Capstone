const db = require('../db.json');


module.exports = {
    // lampTrav: (req, res) => {
    //     const place = req.url
    //     console.log('hit')
    //     return db[place]
    // },
    
    getBabes: (req, res) => {
        res.status(200).send(db)
    },

    addBabes: (req, res) => {
        const babe = req.body.babe
        db.push(babe)
        res.status(200)
    },

    removeBabe: (req, res) => {
        const id = req.params.id

        const index = db.findIndex(babe => {
            return babe.id === +id
        })
        db.splice(index, 1)
        res.status(200).send(db)
    }

}

