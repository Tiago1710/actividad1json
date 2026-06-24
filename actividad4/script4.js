fetch('empleados.json')
.then(rpta => rpta.json())
.then(datos => {

    let salida = "";

    datos.forEach(emp => {

        salida += `
        <div>
            <h3>${emp.nombre} ${emp.apellido}</h3>
            <p>Número: ${emp._numero}</p>
            <p>Fecha Nacimiento: ${emp.fecha_nacimiento}</p>
            <p>Puesto: ${emp.puesto}</p>
            <p>Departamento: ${emp.departamento}</p>
            <hr>
        </div>
        `;
    });

    document.getElementById("resultado").innerHTML = salida;
})
.catch(error => alert(error));