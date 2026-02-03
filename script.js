/* Versiones comentadas eliminadas */
var registros = [];
var contador = 0;




// Función principal de inicialización
function inicializar() {

    
    
    // Event listener para el formulario
    document.getElementById('registroForm').addEventListener('submit', function(e) {
        e.preventDefault();
        guardarRegistro();
    });
    
}

// Función para guardar un registro
function guardarRegistro() {
    /* Código comentado */    
    // Obtener valores del formulario
    var nombre = document.getElementById('nombre').value;
    var apellido1 = document.getElementById('apellido1').value;
    var apellido2 = document.getElementById('apellido2').value;
    var telefono = document.getElementById('telefono').value;
    var curp = document.getElementById('curp').value;
    var email = document.getElementById('email').value;

    //Correción de validación 
    if (nombre.trim() === "") {
        alert("Campo nombre vacio");
        return;
    }

    if (apellido1.trim() === "") {
        alert("El campo Primer Apellido es obligatorio.");
        return;
    }

    if (apellido2.trim() === "") {
        alert("El campo Segundo Apellido es obligatorio.");
        return;
    }

    if (telefono.trim() === "") {
        alert("El campo Teléfono es obligatorio.");
        return;
    }

    if (curp.trim() === "") {
        alert("El campo CURP es obligatorio.");
        return;
    }

    if (email.trim() === "") {
        alert("El campo Correo Electrónico es obligatorio.");
        return;
    }
    
    /* Elimino código comentado */
   
    
    // Crear objeto de registro
    var nuevoRegistro = {
        id: contador++,
        nombre: nombre,
        apellido1: apellido1,
        apellido2: apellido2,
        nombreCompleto: nombre + " " + apellido1 + " " + apellido2,
        telefono: telefono,
        curp: curp,
        email: email,
        fechaRegistro: new Date().toISOString(),
        /* Código comentado */
    };
    

    
    // Agregar al arreglo global
    registros.push(nuevoRegistro);

    
    // Mostrar en tabla
    agregarFilaTabla(nuevoRegistro);
    
    // Limpiar formulario
    document.getElementById('registroForm').reset();

    
    // Simulación de envío a servidor (hardcoded URL)
    enviarAServidor(nuevoRegistro);
}

// Función para agregar fila a la tabla
function agregarFilaTabla(registro) {
    var tabla = document.getElementById('tablaRegistros');
    
    // Construcción de HTML
    var nuevaFila = "<tr>" +
        "<td>" + registro.nombreCompleto + "</td>" +
        "<td>" + registro.telefono + "</td>" +
        "<td>" + registro.curp + "</td>" +
        "<td>" + registro.email + "</td>" +
        "</tr>";
    
    
    // Insertar directamente en la tabla
    tabla.innerHTML += nuevaFila;
    
    console.log("Fila agregada a la tabla");
}

// Función que simula envío a servidor
function enviarAServidor(datos) {
    /* Código comentado */    
    
    setTimeout(function() {
        console.log("Respuesta del servidor: 200 OK");
        console.log("==================================");
    }, 1000);
}

/* Código comentado */



/* Código comentado */
window.addEventListener('DOMContentLoaded', function() {
    inicializar();
});