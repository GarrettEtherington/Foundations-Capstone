const travelL = document.getElementById("currentL")
const babeContainer = document.getElementById("babesList")
const button1 = document.getElementById("butt1")
const button2 = document.getElementById("butt2")
const babs = document.getElementById("babeImage")
const wordZ = document.getElementById("writing")

const baseURL = "http://localhost:4545/api/babes"
const errCallback = err => console.log(err);

const moveTo = (endpoint) => {
    window.location.pathname = `public/${endpoint}.html`
}

const getAllBabes = () => {
    axios.get(baseURL).then(showBabes).catch(errCallback)
}

const addBabe = (id) => {
    axios.get(`http://localhost:4545/api/findbabe/${id}`).then(response => {
        const babe = response.data
        axios.post(baseURL, babe).then(getAllBabes).catch(errCallback)
    }).catch(errCallback)
}

const deleteBabe = (id) => {
    axios.delete(`${baseURL}/${id}`).then(getAllBabes).catch(errCallback)
}

const updateBabe = (id, name) => {
    const newName = {name: name}
    console.log("new", newName)
    axios.put(`${baseURL}/${id}`, newName).then(getAllBabes).catch(errCallback)
}

const gimmieBabe = (id) => {
    axios.get(`http://localhost:4545/api/findbabe/${id}`).then(response => {
        const foundBabe = response.data
        babs.src = foundBabe.img
        babs.setAttribute('data-custom', id);
        wordZ.innerText = foundBabe.word
    })
}



function showBabes({ data: arr }) {
    babeContainer.innerHTML = '';
    arr.forEach(babe => {
        const babeHolder = document.createElement("li");
        babeHolder.style.display = "flex";
        babeContainer.style.padding = "0";
        babeHolder.style.justifyContent = "space-between";

        const babeName = document.createElement("p");
        const deleteBtn = document.createElement("button");
        deleteBtn.style.margin = "15px 0";

        babeName.textContent = babe.name;
        deleteBtn.textContent = "x";

        deleteBtn.addEventListener("click", deleteBabe);

        babeName.addEventListener("click", () => {
            const input = document.createElement("input");
            input.type = "text";
            input.value = babeName.textContent;
            input.addEventListener("blur", () => {
                updateBabe(babe.id, input.value); 
                babeHolder.removeChild(input);
            });
            babeHolder.insertBefore(input, deleteBtn);
            babeHolder.removeChild(babeName); 
            input.focus();
        });
        

        babeHolder.appendChild(babeName);
        babeHolder.appendChild(deleteBtn);
        babeContainer.appendChild(babeHolder);
    });
}

travelL.addEventListener("change", () => {moveTo(travelL.value)})
button1.addEventListener("click", () => { const buttonValue = button1.value; gimmieBabe(buttonValue)})
button2.addEventListener("click", () => { const buttonValue = button2.value; gimmieBabe(buttonValue)})
babs.addEventListener("click", () => {const babeId = babs.getAttribute('data-custom'); addBabe(babeId); getAllBabes})