var categorias = [
    {
        imagen: "img/hamburguesa.webp",
        opc:["img/bk_logo.png", "img/pizza_hut.png", "img/kfc_logo.png"],
        tituloRestaurante:["BURGER KING", "PIZZA HUT", "KFC"],
        nomCategoria: "Restaurantes"
    },
    {
        imagen: "img/carrito.jpg",
        opc:[]
    },
    {
        imagen: "img/botiquin.png",
        opc:[]
    },
    {
        imagen: "img/bebidas.jpg",
        opc:[]
    }
]

var restaurantes = [
    {
        nombre:"BURGER KING"
    },
    {
        nombre:"PIZZA HUT",
        logo: "img/pizza_hut.png",
        encabezado: "img/encabezadoPizza.png",
        calificacion: "4.5",
        tiempoEnvio: "30 min",
        precioEnvio: "40L.",
        individuales:[
            {
                nomComida:"PIZZA BASE DE QUESO",
                descripcion:"Pizza base de queso",
                imagen:"img/Pbasqueso.png",
                precio:"LPS. 199"
            },
            {
                nomComida:"PIZZA BASE DE QUESO",
                descripcion:"Pizza base de queso",
                imagen:"img/Pbasqueso.png",
                precio:"LPS. 199"
            },
            {
                nomComida:"PIZZA BASE DE QUESO",
                descripcion:"Pizza base de queso",
                imagen:"img/Pbasqueso.png",
                precio:"LPS. 199"
            },
            {
                nomComida:"PIZZA BASE DE QUESO",
                descripcion:"Pizza base de queso",
                imagen:"img/Pbasqueso.png",
                precio:"LPS. 199"
            }
        ],
        Familiares:[
            {
                nomComida:"PIZZA BASE DE QUESO",
                descripcion:"Pizza base de queso",
                imagen:"img/Pbasqueso.png",
                precio:"LPS. 199"
            },
            {
                nomComida:"PIZZA BASE DE QUESO",
                descripcion:"Pizza base de queso",
                imagen:"img/Pbasqueso.png",
                precio:"LPS. 199"
            },
            {
                nomComida:"PIZZA BASE DE QUESO",
                descripcion:"Pizza base de queso",
                imagen:"img/Pbasqueso.png",
                precio:"LPS. 199"
            },
            {
                nomComida:"PIZZA BASE DE QUESO",
                descripcion:"Pizza base de queso",
                imagen:"img/Pbasqueso.png",
                precio:"LPS. 199"
            }
        ],
        complementos:[
            {
                nomComida:"PIZZA BASE DE QUESO",
                descripcion:"Pizza base de queso",
                imagen:"img/Pbasqueso.png",
                precio:"LPS. 199"
            },
            {
                nomComida:"PIZZA BASE DE QUESO",
                descripcion:"Pizza base de queso",
                imagen:"img/Pbasqueso.png",
                precio:"LPS. 199"
            },
            {
                nomComida:"PIZZA BASE DE QUESO",
                descripcion:"Pizza base de queso",
                imagen:"img/Pbasqueso.png",
                precio:"LPS. 199"
            },
            {
                nomComida:"PIZZA BASE DE QUESO",
                descripcion:"Pizza base de queso",
                imagen:"img/Pbasqueso.png",
                precio:"LPS. 199"
            }
        ]
    }
]

function generarCategorias(){
    console.log(categorias[0].imagen)
    categorias.forEach(function(cat, codigo){
        console.log(cat.imagen)
        document.getElementById('categorias').innerHTML +=
        `
        <div onclick="opciones(${codigo})" class="contenedorCategoria" style="background-image: url(${cat.imagen})"><p>textazo</p></div>
        `
    });
}
generarCategorias();

function opciones(categoriaSeleccionada){
    document.getElementById('seleccionar-opcion').innerHTML= " ";
    document.getElementById('seleccionar-opcion').innerHTML =
    `<p>${categorias[categoriaSeleccionada].nomCategoria}</p>`

    categorias[categoriaSeleccionada].opc.forEach(function(logoTitulo, cod){
        document.getElementById('seleccionar-opcion').innerHTML +=
        `<div onclick="seleccionarCompras(${cod})">
            <div class="gip-opciones">
                <div class="contenedor-logo-titulo-opciones">
                    <div class="logo-opciones"><img style="height: 100%;" src=${logoTitulo}></div>
                    <div class="titulo-opciones"><p style="font-size: 24px;">${categorias[categoriaSeleccionada].tituloRestaurante[cod]}</p></div>
                </div>
            </div>
        </div>`
    })
    mostrarOpcionesCategoria();

}

function seleccionarCompras(restauranteSeleccionado){
    document.getElementById('opcines-de-compra').innerHTML = 
    `<div style="height: 114px;"><img style="height: 114px; width: 100%;" src=${restaurantes[restauranteSeleccionado].encabezado}></div>

    <div id="informacion-local">
        <div>
            <img class="logo-pagina" src=${restaurantes[restauranteSeleccionado].logo}>
        </div>
        <div>
            <div><p style="margin: 0; font-size: 30px;">${restaurantes[restauranteSeleccionado].nombre}</p></div>
            <div style="display: flex;"><i class="fa-solid fa-star"></i><p style="margin: 0;">${restaurantes[restauranteSeleccionado].calificacion}</p></div>
        </div>
    </div>

    <div id="contenedor-inf-envio">
        <div id="caja-inf-envio">
            <div style="margin-left: 25px;">
                <p>Te llega en:</p>
                <p>${restaurantes[restauranteSeleccionado].tiempoEnvio}</p>
            </div>
            <div style="margin-right: 25px;">
                <p>Envío:</p>
                <p>${restaurantes[restauranteSeleccionado].precioEnvio}</p>
            </div>
        </div>
    </div>

    <div class="menu">
        <ul>
          <li><p>Individuales</p></li>
          <li>
            <p>Familiares</p>
          </li>
          <li><p>Complementos</p></li>
        </ul>
    </div>`

    restaurantes[restauranteSeleccionado].individuales.forEach(function(opcionMenu){
        document.getElementById('opcines-de-compra').innerHTML +=
        `
        <div id="contenedor-productos">
            <div style="margin-left: 10px;">
                <div><p style="font-size: 18px; color: red">${opcionMenu.nomComida}</p></div>
                <div><p style="font-size: 16px;">${opcionMenu.descripcion}</p></div>
                <div style="display: flex; justify-content: space-between;">
                    <div><p style="font-size: 20px;">${opcionMenu.precio}</p></div>
                    <div><button type="button" class="btn btn-primary" data-toggle="modal" data-target="#ventana" id="botonOrdenar" onclick="modalCantidadOrdenar()">Ordenar</button></div>
                </div>
            </div>
            <div style="border-right: 0;">
                    <img style="height: 150px;" src=${opcionMenu.imagen}>
            </div>
        </div>
        `
    })
    mostrarOpcionesMenu();
}

function modalCantidadOrdenar(){
    document.getElementById('modalOrdenar').innerHTML +=
    `
    <div class="modal fade" id="ventana" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-body">
                    <p>Cantidad:</p>
                    <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <button class="btn btn-outline-secondary" type="button" id="menos">-</button>
                    </div>
                    <input type="text" class="form-control" id="cantidad" value="1" readonly>
                    <div class="input-group-append">
                        <button class="btn btn-outline-secondary" type="button" id="mas">+</button>
                    </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                    <button type="button" class="btn btn-primary" id="ordenar">Ordenar</button>
                </div>
            </div>
        </div>
    </div>
    `
    abirModal();
}

function abirModal(){
    $('#ventana').modal('show');
}

function verComplementos(){
    
}

const mostrarOpcionesCategoria = () => {
    document.getElementById('inicio').style.display = "none";
    document.getElementById('seleccionar-opcion').style.display = "block";
    document.getElementById('opcines-de-compra').style.display = "none";
}

const mostrarOpcionesMenu = () => {
    document.getElementById('inicio').style.display = "none";
    document.getElementById('seleccionar-opcion').style.display = "none";
    document.getElementById('opcines-de-compra').style.display = "block";
    document.getElementById('barraNav').style.display = "none";
}