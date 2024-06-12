import { conexionAPI } from "./conexionAPI.js"

const formulario = document.querySelector("[data-formulario]")

async function crearCard(evento){

    const nombre = document.querySelector("[data-nombre]").value
    const precio = document.querySelector("[data-precio]").value
    const imagen = document.querySelector("[data-imagen]").value

    await conexionAPI.enviarProducto(imagen,titulo,precio)

}

formulario.addEventListener("submit", evento =>crearCard(evento))