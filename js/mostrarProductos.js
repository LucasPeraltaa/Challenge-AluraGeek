import { conexionAPI } from "./conexionAPI.js";

const misProductos = document.querySelector("[data-product]")

function crearCard(imagen,titulo,precio){
    const producto = document.createElement("div")
    producto.className.add("productos-disponibles")

    producto.innerHTML = `
      <div class="producto">
        <img class="imagen-url-producto" src="${imagen}" alt="${titulo}">

        <div class="nombre-producto">
          <p>${titulo}</p>
        </div>

        <div class="precio-botton">

          <div class="precio-producto">
            <p>$${precio}</p>
          </div>

          <div data-borrar class="btn-vaciar" id="${id}">
            <img src="img/img-borrar.png" alt="borrar" class="img-borrar"/>
          </div>

        </div>
      </div>`;

      return producto;
}

async function listarProductos(){

    const listAPI = conexionAPI.listarProductos()

    listAPI.forEach(producto=>lista.appendChild(crearCard
      (producto.imagen, producto.titulo,producto.precio,)))
}