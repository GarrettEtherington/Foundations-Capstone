const db = require('../db.json')
const list = require('../list.json')


module.exports = {
    // lampTrav: (req, res) => {
    //     const place = req.url
    //     console.log('hit')
    //     return db[place]
    // },
  
    findBabe: (req, res) => {
        const id = req.params.id

        const index = db.findIndex(babe => {
            const key = Object.keys(babe)[0];
            const babeid = babe[key].id
            return babeid === parseInt(id, 10)
        })

        const dude = db[index]
        const key = Object.keys(dude)[0];
        res.status(200).send(dude[key])
    },

    getBabes: (req, res) => {
        res.status(200).send(list)
    },

    addBabes: (req, res) => {
        const babe = req.body
        const alreadyExists = list.some(existingBabe => existingBabe.id === babe.id);
        if (!alreadyExists) {
            list.push(babe);
            res.status(200).send('Babe added successfully');
        } else {
            console.log('Babe already exists in the list');
            res.status(400).send('Babe already exists in the list');
        }
    },

    removeBabe: (req, res) => {
        const id = req.params.id

        const index = list.findIndex(babe => {
            return babe.id === parseInt(id, 10)
        })
        list.splice(index, 1)
        res.status(200).send(list)
    },

    updateBabe: (req, res) => {
        const id = req.params.id;
        const { name } = req.body;
    
        const index = list.findIndex(babe => {
            const babeid = babe.id;
            return babeid === parseInt(id, 10);
        });

        
        if (index === -1) {
            return res.status(404).send('Babe not found');
        }
        
        const babe = list[index];
        babe.name = name;
    
        res.status(200).send(babe);
    },
    
    becomeChad: (req, res) => {
        console.log(list.length)
        if(list.length === 8) {
            res.status(200).send("mhm")
        } else {
            res.status(200).send("uh uh")
        }
    }
}


