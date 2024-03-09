const db = require('../db.json')
const list = require('../list.json')

const travelL = document.getElementById("currentL")
const babeContainer = document.getElementById("babesList")

const baseURL = `/api/babes`
const babeCallback = ({ data: babes }) => showBabes(babes)
const errCallback = err => console.log(err);

const moveTo = (endpoint) => {
    window.location.pathname = `public/${endpoint}.html`
};

const getAllBabes = () => {
    console.log(`something`)
    axios.get(baseURL).then(babeCallback).catch(errCallback)
}

const findBabe = (id) => {
    const index = db.findIndex(babe => {
        return babe.id === +id
    })

    return db[index]
}

const addBabe = (id) => {
    const babe = findBabe(id)
    axios.post(baseURL, babe).then(babeCallback).catch(errCallback)
}

const deleteBabe = (id) => {
    axios.delete(`${baseURL}/${id}`).then(babeCallback).catch(errCallback)
}

const updateBabe = (id) => {
    const name = {name: input.value}
    axios.put(`${baseURL}/${id}`, name).then(babeCallback).catch(errCallback)
}



function showBabes(arr) {
    arr.forEach(babe => {
        const div = document.createElement('li')
        div.textContent = babe.name
        babeContainer.appendChild(div)
    })
}

travelL.addEventListener("change", () => {moveTo(travelL.value)})

getAllBabes()