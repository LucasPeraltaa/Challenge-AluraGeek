async function listarProductos(){

    const conexion = await fetch("http://localhost:3001/productos",{
        method:"GET",
        headers:{
            "Content-type":"application/json",
        }
    });
    
    const conexionConvertida = await conexion.json()
    
    console.log(conexionConvertida)

    return conexionConvertida
}

async function enviarProducto(nombre, precio, imagen){

    const conexion = await fetch("http://localhost:3001/productos",{
        method:"POST",
        headers:{"Content-type":"application/json"},
        body:JSON.stringify({
            nombre,
            precio,
            imagen,
        })
    })
    const conexionConvertida = await conexion.json();

    return conexionConvertida
}

const eliminarCard = async (id) =>{
    try{
        const res = await fetch(`http://localhost:3001/productos/${id}`,{
            method: "DELETE"
        })
        return await res.json()
    }catch(err){
        return console.log(err)
    }
}


export const conexionAPI = {
    listarProductos, 
    enviarProducto,
    eliminarCard
}