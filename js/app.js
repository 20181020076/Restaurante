//arreglos
const productos = [
    {
        id: 1,
        nombre: "empanada",
        precio: 2500,
    },
    {
        id: 2,
        nombre: "pastel",
        precio: 3000,
    },
    {
        id: 3,
        nombre: "papa",
        precio: 3000,
    },
    {
        id: 4,
        nombre: "hamburguesa",
        precio: 8900,
    }
]
const usuarios = [
    {
        id: 1,
        user: "ramon",
        password: 1234,
        estado :"admin",
    },
    {
        id: 2,
        user: "empleado",
        password: 456,
        estado: "empleado",
    }
]
let carrito = [];
let nombres = usuarios.map(function(user){
    return user.user;
});
let nombresProductos = productos.map((producto)=>{return producto.nombre});
//botones

let botonAgregar = document.getElementById("boton__agregar");
let botonMenos = document.getElementById("boton__menos");
let botonLimpiar = document.getElementById("boton__limpiar");
let botonInventario = document.getElementById("boton__inventario");
let botonRegistros = document.getElementById("boton__registros");
let botonImprimir = document.getElementById("boton__imprimir");
let botonCerrar = document.getElementById("boton__cerrar");
//elementos
let panel = document.getElementById("aplicacion__panel__lista__form");
let pantallaTotal = document.getElementById("aplicacion__total");


//eventos de escucha

botonAgregar.addEventListener("click",agregar);
botonMenos.addEventListener("click",menos);
botonLimpiar.addEventListener("click",limpiarPanel);
botonImprimir.addEventListener("click",imprimir);
botonCerrar.addEventListener("click",cerrar);
//funciones


function agregar(){
    let referencia = document.getElementById("codigo");
    productos.forEach((producto)=>{
        if (referencia.value==producto.id){
            if(carrito.includes(producto)){

            }else{
            carrito.push(producto);
            panel.innerHTML += `<div id="${producto.nombre}"><input type="checkbox"><label>${producto.nombre}, ${producto.precio}</label></div>`;
            }
                // if(items[0]==producto){
                //     carrito[1]++;
                // }else{
                //     carrito.push([producto,1])
                //     panel.innerHTML += `<div id="${producto.nombre}"><input type="checkbox"><label>${producto.nombre}, ${producto.precio}</label></div>`;
                // }
            
        }
        
    });
    console.log(carrito);

    imprimir();
}
function menos(){
    console.log( panel.elements)
    imprimir();
}


function limpiarPanel(){
    carrito = [];
    panel.innerHTML = `<div class="aplicacion__panel__lista></div>`;
    limpiarCampos();
    imprimir();
}
function imprimir(){
    
    pantallaTotal.innerHTML = carrito.reduce((acc,producto)=>acc+producto.precio,0)
}
function cerrar(){
    window.location.replace("/index.html");
}
function limpiarCampos(){
    document.getElementById("codigo").value = 1;
    pantallaTotal.innerHTML = 0;

}
