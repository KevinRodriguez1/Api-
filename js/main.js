const apiKey = "iy5G6xioNFWevme9Ein3HIm6O44EzZvK";

const termino = document.querySelector(".termino");
const buscador = document.querySelector(".buscador");
const resultados = document.querySelector(".resultado");



buscador.addEventListener("click", () => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${termino.value}&limit=25`
    const peticion = fetch(url);

    peticion
        .then((response) => {
            return response.json();

        })

        .then((response) => {
            console.log(response);
        })

        
}) 

