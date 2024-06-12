async function listarProductos(){

    const conexion = await fetch("http://localhost:3001/productos",{
        method:"GET",
        headers:{
            "Content-type":"application/json",
        }
    });
    
    const conexionConvertida = await conexion.json()
    
    return conexionConvertida
}

async function enviarProducto(imagen,titulo,precio){

    const conexion = await fetch("http://localhost:3001/productos",{
        method:"POST",
        headers:{"Content-type":"application/json"},
        body:JSON.stringify({
            imagen:imagen,
            titulo:titulo,
            precio:precio
        })
    })
    const conexionConvertida = await conexion.json();

    return conexionConvertida
}


export const conexionAPI = {
    listarProductos, enviarProducto
}