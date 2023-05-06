var pedido = [];

function generarCategorias(){

    fetch('/categorias', {
        method: 'GET',
        headers: {
            "Content-Type": "application/json", 
        }
    })
    .then((res) => res.json())
    .then((res) => {
        res.forEach(function(cat){
            console.log(cat._id)
            document.getElementById('categorias').innerHTML +=
            `
            <div onclick="opciones('${cat._id}')" class="contenedorCategoria" style="background-image: url(${cat.imagen})"><p id="test">${cat.nomCategoria}</p></div>
            `
        });
    }); 
}
generarCategorias();

function opciones(categoriaSeleccionada){
    console.log(categoriaSeleccionada)
    fetch(`/categorias/${categoriaSeleccionada}/categoria`, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json", 
        }
    })
    .then((res) => res.json())
    .then((res) => {
        console.log(res);
            document.getElementById('seleccionar-opcion').innerHTML= " ";
            document.getElementById('seleccionar-opcion').innerHTML =
            `<div class="titulo-categoria"><p>${res.nomCategoria}</p></div>`

            res.opc.forEach(function(logoTitulo, cod){
                document.getElementById('seleccionar-opcion').innerHTML +=
                `<div style="margin-bottom: 15px;" onclick="seleccionarCompras('${res.tituloRestaurante[cod]}')">
                    <div class="gip-opciones">
                        <div class="contenedor-logo-titulo-opciones">
                            <div class="logo-opciones"><img style="height: 100%;" src=${logoTitulo}></div>
                            <div class="titulo-opciones"><p style="font-size: 24px;">${res.tituloRestaurante[cod]}</p></div>
                        </div>
                    </div>
                </div>`
            })
            mostrarOpcionesCategoria();
        }); 

}

function seleccionarCompras(tituloRestaurante){

    fetch(`/restaurantes/${tituloRestaurante}/informacion`, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json", 
        }
    })
    .then((res) => res.json())
    .then((res) => {
        document.getElementById('opcines-de-compra').innerHTML = 
        `<div style="height: 114px;"><img style="height: 114px; width: 100%;" src=${res.encabezado}></div>

        <div id="informacion-local">
            <div>
                <img class="logo-pagina" src=${res.logo}>
            </div>
            <div>
                <div><p style="margin: 0; font-size: 30px;">${res.nombre}</p></div>
                <div style="display: flex;"><i class="fa-solid fa-star"></i><p style="margin: 0;">${res.calificacion}</p></div>
            </div>
        </div>

        <div id="contenedor-inf-envio">
            <div id="caja-inf-envio">
                <div style="margin-left: 25px; margin-top: 10px;">
                    <p>Te llega en:</p>
                    <p>${res.tiempoEnvio}</p>
                </div>
                <div style="margin-right: 25px; margin-top: 10px;">
                    <p>Envío:</p>
                    <p>${res.precioEnvio}</p>
                </div>
            </div>
        </div>

        <div class="menu">
            <ul>
            <li><p onclick="opcionesMenuIndividuales('${tituloRestaurante}')" style="font-size: 18px">Individuales</p></li>
            <li>
                <p onclick="opcionesMenuFamiliares('${tituloRestaurante}')" style="font-size: 18px">Familiares</p>
            </li>
            <li><p onclick="opcionesMenuComplementos('${tituloRestaurante}')" style="font-size: 18px">Complementos</p></li>
            </ul>
        </div>`
        opcionesMenuIndividuales(tituloRestaurante);
        
    });

}

function opcionesMenuIndividuales(tituloRestaurante){
    
    fetch(`/restaurantes/${tituloRestaurante}/individuales`, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json", 
        }
    })
    .then((res) => res.json())
    .then((res) => {
        document.getElementById('menu-opciones').innerHTML = " ";
        res.individuales.forEach(function(opcionMenu){
            document.getElementById('menu-opciones').innerHTML +=
            `
            <div id="contenedor-productos">
                <div style="margin-left: 10px;">
                    <div><p style="font-size: 18px; color: red">${opcionMenu.nomComida}</p></div>
                    <div><p style="font-size: 16px;">${opcionMenu.descripcion}</p></div>
                    <div style="display: flex; justify-content: space-between;">
                        <div><p style="font-size: 20px;">LPS. ${opcionMenu.precio}</p></div>
                        <div><button type="button" class="btn btn-primary" data-toggle="modal" data-target="#ventana" 
                        id="botonOrdenar" onclick="modalCantidadOrdenar('${opcionMenu.precio}', '${opcionMenu.nomComida}', '${opcionMenu.imagen}', '${tituloRestaurante}')">Ordenar</button></div>
                    </div>
                </div>
                <div style="border-right: 0;">
                        <img style="height: 150px;" src=${opcionMenu.imagen}>
                </div>
            </div>
            `
        })
        mostrarOpcionesMenu();
        }); 
}

function opcionesMenuFamiliares(tituloRestaurante){

    fetch(`/restaurantes/${tituloRestaurante}/familiares`, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json", 
        }
    })
    .then((res) => res.json())
    .then((res) => {
        document.getElementById('menu-opciones').innerHTML = " ";
        res.familiares.forEach(function(opcionMenu){
            document.getElementById('menu-opciones').innerHTML +=
            `
            <div id="contenedor-productos">
                <div style="margin-left: 10px;">
                    <div><p style="font-size: 18px; color: red">${opcionMenu.nomComida}</p></div>
                    <div><p style="font-size: 16px;">${opcionMenu.descripcion}</p></div>
                    <div style="display: flex; justify-content: space-between;">
                        <div><p style="font-size: 20px;">LPS. ${opcionMenu.precio}</p></div>
                        <div><button type="button" class="btn btn-primary" data-toggle="modal" data-target="#ventana" id="botonOrdenar" onclick="modalCantidadOrdenar('${opcionMenu.precio}', '${opcionMenu.nomComida}', '${opcionMenu.imagen}', '${tituloRestaurante}')">Ordenar</button></div>
                    </div>
                </div>
                <div style="border-right: 0;">
                        <img style="height: 150px;" src=${opcionMenu.imagen}>
                </div>
            </div>
            `
        })
        mostrarOpcionesMenu();
        }); 

}

function opcionesMenuComplementos(tituloRestaurante){
    fetch(`/restaurantes/${tituloRestaurante}/complementos`, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json", 
        }
    })
    .then((res) => res.json())
    .then((res) => {
        document.getElementById('menu-opciones').innerHTML = " ";
        res.complementos.forEach(function(opcionMenu){
            document.getElementById('menu-opciones').innerHTML +=
            `
            <div id="contenedor-productos">
                <div style="margin-left: 10px;">
                    <div><p style="font-size: 18px; color: red">${opcionMenu.nomComida}</p></div>
                    <div><p style="font-size: 16px;">${opcionMenu.descripcion}</p></div>
                    <div style="display: flex; justify-content: space-between;">
                        <div><p style="font-size: 20px;">LPS. ${opcionMenu.precio}</p></div>
                        <div><button type="button" class="btn btn-primary" data-toggle="modal" data-target="#ventana" id="botonOrdenar" onclick="modalCantidadOrdenar('${opcionMenu.precio}', '${opcionMenu.nomComida}', '${opcionMenu.imagen}', '${tituloRestaurante}')">Ordenar</button></div>
                    </div>
                </div>
                <div style="border-right: 0;">
                        <img style="height: 150px;" src=${opcionMenu.imagen}>
                </div>
            </div>
            `
        })
        mostrarOpcionesMenu();
        }); 
}

function modalCantidadOrdenar(precio, nomComida, imagenC, tituloRestaurante){
    document.getElementById('modalOrdenar').innerHTML +=
    `
    <div class="modal fade" id="ventana" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-body">
                    <p>Cantidad:</p>
                    <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <button class="btn btn-outline-secondary" type="button" onclick="restar()" id="menos">-</button>
                    </div>
                    <input type="text" class="form-control" id="cantidad" value="1" readonly>
                    <div class="input-group-append">
                        <button class="btn btn-outline-secondary" type="button" onclick="sumar()" id="mas">+</button>
                    </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                    <button type="button" class="btn btn-primary" onclick="agregarAlPedido(${parseInt(precio)}, '${nomComida}', '${imagenC}', '${tituloRestaurante}')" style="background-color: #4F3EA3" id="ordenar">Ordenar</button>
                </div>
            </div>
        </div>
    </div>
    `
    abirModal();
}

function agregarAlPedido(precioC, nomComida, imagenC, tituloRestaurante){
    var cantidadInput = document.getElementById("cantidad").value;
    var cantidadActual = parseInt(cantidadInput);
    let restau = tituloRestaurante;
    let plato = nomComida;
    let imagenPublicitaria = imagenC
    let encargo ={
        restaurante: restau,
        nombre: plato,
        imagen: imagenPublicitaria,
        precio: precioC,
        cantidad: cantidadActual
    }
    pedido.push(encargo);
    console.log(pedido);
    $('#ventana').modal('hide');
}

function restar(){
    var cantidadInput = document.getElementById("cantidad").value;
    var cantidadActual = parseInt(cantidadInput);
    if (cantidadActual > 1) {
      cantidadActual = cantidadActual - 1;
      console.log("yeah yeah")
      document.getElementById("cantidad").value = cantidadActual;
    }

}

function sumar(){
    var cantidadInput = document.getElementById("cantidad").value;
    var cantidadActual = parseInt(cantidadInput);
   
    cantidadActual = cantidadActual + 1;
    console.log("yeah yeah")
    document.getElementById("cantidad").value = cantidadActual;
    

}

function mostrarPedido(){
    let factura = 0;
    let impuesto;
    document.getElementById("pedidos").innerHTML = " ";
    for(let i=0; i<pedido.length; i++){
        factura += (pedido[i].precio * pedido[i].cantidad);
        document.getElementById("pedidos").innerHTML += `
        <div class="contenedor-carrito">
            <div style="margin-left: 10px;">
                <img style="height: 150px;" src="${pedido[i].imagen}">
            </div>
            <div id="flex-infCarrito">
                    <div class="productos-carrito">${pedido[i].restaurante}:</div>
                    <div class="productos-carrito">${pedido[i].nombre}</div>
                    <div class="productos-carrito">precio: Lps ${pedido[i].precio}</div>
                    <div class="productos-carrito">cantidad: ${pedido[i].cantidad}</div>
            </div>
        </div>
        `
    }
    impuesto = factura*0.15;
    if(pedido != ''){
    document.getElementById("pedidos").innerHTML += `
    <div style="display: flex; margin-left: 30px; justify-content: space-between; margin-right: 30px;">
        <p>
            impuestos:
        </p>
        <p>
            ${impuesto}
        </p>
    </div>
    <div style="display: flex; margin-left: 30px; justify-content: space-between; margin-right: 30px;">
        <p>total:</p>
        <p>${factura}</p>
    </div>
    `
    }
}

function enviarPedido(){
    let usuario = localStorage.getItem('usuario');
    let direccion = document.getElementById("direccion").value;
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
    "id": usuario,
    "listaProductos": pedido,
    "direccion": direccion  
    });

    var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
    };

    fetch("/pedidos/nuevo", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}

function abirModal(){
    $('#ventana').modal('show');
}


const mostrarOpcionesCategoria = () => {
    document.getElementById('inicio').style.display = "none";
    document.getElementById('seleccionar-opcion').style.display = "block";
    document.getElementById('opcines-de-compra').style.display = "none";
}

const mostrarOpcionesMenu = () => {
    document.getElementById('inicio').style.display = "none";
    document.getElementById('seleccionar-opcion').style.display = "none";
    document.getElementById('menu-opciones').style.display = "block";
    document.getElementById('opcines-de-compra').style.display = "block";

}

const regresarInicio = () => {
    document.getElementById('inicio').style.display = "block";
    document.getElementById('seleccionar-opcion').style.display = "none";
    document.getElementById('opcines-de-compra').style.display = "none";
    document.getElementById('menu-opciones').style.display = "none";
}