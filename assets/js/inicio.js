let numeroPedidosInicio = document.querySelector("#numero-pedidos-inicio");
//console.log(numeroPedidosInicio)

 //let productosEnCarrito;
 let productosEnCarritoInicio = JSON.parse(localStorage.getItem("productos-en-carrito"));

//console.log(productosEnCarritoInicio);

function actualizarNumeroPedidos (){
    let nuevoNumeroPedidos = productosEnCarritoInicio.reduce((acc, producto) => acc + producto.cantidad, 0);
    //console.log(nuevoNumeroPedidos);
    numeroPedidosInicio.innerText = nuevoNumeroPedidos;
}

actualizarNumeroPedidos ();