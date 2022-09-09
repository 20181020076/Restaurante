//arreglos
let usuarios=[{u:"ramon",p:"1234",e:"admin"},{u:"empleado1",p:"456",e:"empleado"}];
let productos=[{nombre:"empanada",precio:2000,codigo:1},{nombre:"pastel",precio:2500,codigo:2}];
let carrito = [];
let nombres = usuarios.map(function(user){
    return user.u;
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
let panel = document.getElementById("aplicacion__panel__lista");
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
        if (referencia.value==producto.codigo){
            carrito.push(producto)
            panel.innerHTML += `<div class="aplicacion__panel__lista__item">${producto.nombre}, ${producto.precio}</div>`;
        }
    });
}
function menos(){
    console.log("")
}


function limpiarPanel(){
    carrito = [];
    panel.innerHTML = `<div class="aplicacion__panel__lista></div>`;
    limpiarCampos();
}
function imprimir(){
    let total = carrito.reduce((acc,producto)=>{
        return acc = acc + producto.precio;
    },0);
    pantallaTotal.innerHTML = total; 
}
function cerrar(){
    window.location.replace("/index.html");
}
function limpiarCampos(){
    document.getElementById("codigo").value = 1;
    pantallaTotal.innerHTML = 0;

}
