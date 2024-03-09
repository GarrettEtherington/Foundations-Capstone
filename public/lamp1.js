const travelL = document.getElementById("currentL")
const babeContainer = document.getElementById("babesList")

const baseURL = `api/babes`

const errCallback = err => console.log(err);

const moveTo = (endpoint) => {
    window.location.pathname = `public/${endpoint}.html`
};

const getAllBabes = () => {
    axios.get(baseURL).then(showBabes).catch(errCallback)
}

function showBabes(arr) {
    arr.forEach(babe => {
        const div = document.createElement('li')
        div.textContent = babe.name
        babeContainer.appendChild(div)
    })
}


travelL.addEventListener("change", () => {moveTo(travelL.value)})