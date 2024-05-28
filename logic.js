const temaOscuro = () => {
    document.querySelector("body").setAttribute("data-bs-theme", "dark");
    document.querySelector("body").setAttribute("class", "text-bg-dark");
    document.querySelector("#modo").setAttribute("class", "bi bi-sun-fill link-body-emphasis fs-3");
}

const temaClaro = () => {
    document.querySelector("body").setAttribute("data-bs-theme", "light");
    document.querySelector("body").setAttribute("class", "text-bg-light");
    document.querySelector("#modo").setAttribute("class", "bi bi-moon-fill link-body-emphasis fs-3");
}

const cambiarTema = () => {
    document.querySelector("body").getAttribute("data-bs-theme") === "light"?
    temaOscuro() : temaClaro();
}