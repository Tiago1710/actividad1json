fetch('personas.json')
.then(rpta => rpta.json())
.then(datos => {

    let salida = "";
    datos.forEach(persona => { salida += ` <p>  Nombre: ${persona.name} - Edad: ${persona.age} años </p>`;
    });
    document.getElementById("resultado").innerHTML = salida;
})
.catch(error => alert(error));