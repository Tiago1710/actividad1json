fetch('inventario.json')
.then(rpta => rpta.json())
.then(datos => {

    let salida = "";

    datos.forEach(producto => {

        salida += `
        <div>
            <h3>${producto.nombre}</h3>
            <p>Código: ${producto._codigo}</p>
            <p>Categoría: ${producto._categoria}</p>
            <p>Precio: $${producto.precio}</p>
            <p>Stock: ${producto.stock}</p>
            <p>Fecha ingreso: ${producto.fecha_ingreso}</p>
            <hr>
        </div>
        `;
    });

    document.getElementById("resultado").innerHTML = salida;
})
.catch(error => alert(error));