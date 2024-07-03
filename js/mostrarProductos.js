import { conexionAPI } from "./conexionAPI.js"

const listaProductos = document.querySelector(".contenedor-productos")

function crearCard(id, nombre, precio, imagen){
    const producto = document.createElement("div")
    producto.classList.add("productos-disponibles")

    // aqui creamos la estructura de la card

    producto.innerHTML = `
      <div class="producto">
        <img class="imagen-url-producto" src="${imagen}" alt="Imagen del producto">

        <div class="nombre-producto">
          <p>${nombre}</p>
        </div>

        <div class="precio-botton">

          <div class="precio-producto">
            <p>$${precio}</p>
          </div>

          <div data-borrar class="btn-delete" id="${id}">
            <img src="img/img-borrar.png" alt="borrar" class="img-borrar"";/>
          </div>
          
          </div>
        </div>`;

        const eliminarCard = producto.querySelector(".btn-delete")
        eliminarCard.addEventListener("click", () => {
          conexionAPI.eliminarCard(id)
          .then(() => {
            producto.remove();
          }).catch(err=>console.log(err))
        })

      return producto;
}

async function listarProductos(){

  const productsList = await conexionAPI.listarProductos()

  productsList.map(product => listaProductos.appendChild(crearCard(product.id,product.nombre, product.precio, product.imagen)))
}
listarProductos()