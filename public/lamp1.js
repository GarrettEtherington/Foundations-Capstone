const travelL = document.getElementById("currentL")

const moveTo = () => {
    axios.get("http://localhost:4545/api/travel/")
        .then(res )
}