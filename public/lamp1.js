const travelL = document.getElementById("currentL")
const data = travelL.addEventListener("change", () => {moveTo(`${travelL.value}`)})
console.log(1, data)

const moveTo = (endpoint) => {
    axios.get(`http://localhost:4545/api/${endpoint}/`)
        .then(res => {
            const data = res.data
            return data
        })
}