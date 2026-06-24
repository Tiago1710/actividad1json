fetch('productos.json')
.then(rpta => rpta.json())
.then(datos => {

    let salida = "";

    datos.forEach(producto => {

        salida += `
        <div>
            <h3>${producto.nombre}</h3>
            <p>Precio: $${producto.precio}</p>
            <p>Disponible: ${producto.disponible}</p>
            <p>Color: ${producto.detalles.color}</p>
            <p>Talla: ${producto.detalles.talla}</p>
            <hr>
        </div>
        `;
    });

    document.getElementById("resultado").innerHTML = salida;
})
.catch(error => alert(error));