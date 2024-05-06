let agregarProducto = document.getElementById("btnAgregarProducto");

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