import { conexionAPI } from "./conexionAPI.js"

const formulario = document.querySelector("[data-formulario]")

async function crearCard(evento){

    evento.preventDefault() //evita que se ejecute de forma automatica

    const nombre = document.querySelector("[data-nombre]").value
    const precio = document.querySelector("[data-precio]").value
    const imagen = document.querySelector("[data-imagen]").value

    await conexionAPI.enviarProducto(nombre, precio, imagen)
}

formulario.addEventListener("submit", evento => crearCard(evento))