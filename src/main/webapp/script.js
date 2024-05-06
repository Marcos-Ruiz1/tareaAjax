let agregarProducto = document.getElementById("btnAgregarProducto");
let consultarCatalogoProductos = document.getElementById("btnConsultarCatalogoProductos");
let inventariarReactivo = document.getElementById("btnInventariarReactivo");
let consultarInventarioReactivos = document.getElementById("btnInventariarReactivo");

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

//Escuchador de eventos para consultar cátalogo de productos con httpRequest
consultarCatalogoProductos.addEventListener('click', function() {
    console.log("entro para consultar catalogo de productos");
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'ObtenProductos', true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            console.log('Product catalog fetched successfully');
            let productos = JSON.parse(xhr.responseText);
            console.log(productos);
            let productosTexto = '';
            for (let i = 0; i < productos.length; i++) {
                productosTexto += 'ID: ' + productos[i].id + ', Nombre: ' + productos[i].nombre + ', Cantidad: ' + productos[i].cantidad + '\n';
            }
            window.alert(productosTexto);
        }
    };
    xhr.send();
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
consultarInventarioReactivos.addEventListener('click', function() {
    
   
});