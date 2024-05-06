let agregarProducto = document.getElementById("btnAgregarProducto");
let consultarCatalogoProductos = document.getElementById("btnConsultarCatalogoProductos");
let inventariarReactivo = document.getElementById("btnInventariarReactivo");
let btnConsultarInventarioReactivos = document.getElementById("btnConsultarInventariarReactivo");

//Escuchador de eventos para agregar productos
agregarProducto.addEventListener('click', function() {
    console.log("entro a la función");
    let producto = {
        nombre: document.getElementById('nombreProducto').value,
        cantidad: document.getElementById('cantidadProducto').value
    };

    let xhr = new XMLHttpRequest();
    xhr.open('POST', 'AgregaProducto', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            console.log('Product created successfully');
        }
    };
    xhr.send(new URLSearchParams(producto));
});




document.addEventListener('DOMContentLoaded', function() {
    let btnConsultarCatalogoProductos = document.getElementById('btnConsultarCatalogoProductos');
    btnConsultarCatalogoProductos.addEventListener('click', function() {
        console.log("Haciendo clic en el botón 'Consultar Catálogo de Productos'");

        // Iniciar la solicitud AJAX para obtener los productos del servidor
        let xhr = new XMLHttpRequest();
        xhr.open('GET', 'ObtenProductos', true);
      
        // Configurar el manejo de la respuesta del servidor
        xhr.onreadystatechange = function () {
            console.log('Estado de la solicitud:', xhr.readyState);
            if (xhr.readyState === 4) {
                console.log('Estado de la respuesta:', xhr.status);
                if (xhr.status === 200) {
                    console.log('Respuesta recibida del servidor:', xhr.responseText);
                    let productos = JSON.parse(xhr.responseText);
                    console.log('Productos obtenidos:', productos);

                    // Actualizar la tabla de productos en index.html con los datos obtenidos del servidor
                    let tablaProductos = document.getElementById('tabla-productos');
                    if (tablaProductos) {
                        let tbody = tablaProductos.getElementsByTagName('tbody')[0];
                        if (tbody) {
                            tbody.innerHTML = ''; // Limpiar la tabla antes de agregar nuevos datos

                            // Iterar sobre los productos y añadirlos a la tabla
                            for (let i = 0; i < productos.length; i++) {
                                let producto = productos[i];
                                let fila = tbody.insertRow();
                                let celdaId = fila.insertCell(0);
                                let celdaNombre = fila.insertCell(1);
                                let celdaCantidad = fila.insertCell(2);
                                celdaId.textContent = producto.id;
                                celdaNombre.textContent = producto.nombre;
                                celdaCantidad.textContent = producto.cantidad;
                            }
                        } else {
                            console.error("No se encontró el tbody en la tabla de productos.");
                        }
                    } else {
                        console.error("No se encontró la tabla de productos en el documento.");
                    }
                } else {
                    console.error('Error al recibir la respuesta del servidor:', xhr.status);
                }
            }
        };

        // Enviar la solicitud al servidor
        xhr.send();
    });
});





//Escuchador de evento para inventariar reactivos con fetch
inventariarReactivo.addEventListener('click', function() {
    console.log("entro a la función de reactivos");
    let reactivo = {
        nombre: document.getElementById('nombreReactivo').value,
        cantidad: document.getElementById('cantidadReactivo').value
    };

    fetch('InventariarReactivo', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams(reactivo)
    })
    .then(response => {
        if (response.ok) {
            console.log('reactivo created successfully');
            return response.text();
        } else {
            throw new Error('Error: ' + response.statusText);
        }
    })
    .catch(error => console.log('Error:', error));
});

//Escuchador de evento para consultar inventario de reactivos con fetch

document.addEventListener('DOMContentLoaded', function() {
 let btnConsultarInventarioReactivos = document.getElementById('btnConsultarInventarioReactivos');
btnConsultarInventarioReactivos.addEventListener('click', function() {
    console.log("pasará?");
    fetch('/ObtenInventarioReactivos')

    
    .then(response => response.json())
    .then(data => {
        // Llenar la tabla con los datos obtenidos
        
        const tabla = document.getElementById('tabla-reactivos');
        tabla.innerHTML = ''; // Limpiar la tabla antes de llenarla
        
        data.forEach(reactivo => {
            const fila = `
                <tr>
                    <td>${reactivo.id}</td>
                    <td>${reactivo.nombre}</td>
                    <td>${reactivo.cantidad}</td>
                </tr>
            `;
            tabla.innerHTML += fila;
        });
    })
    .catch(error => {
        console.error('Error al obtener los reactivos:', error);
    });
});

});