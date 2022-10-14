//arreglos
let productos = []
async function fetchProductos(){
    const response = await fetch('/data/productos.json')
    return await response.json()
}


fetchProductos().then(producto => {
    productos = producto;

})
let usuarios = []

async function fetchUsuarios(){
    const response2 = await fetch('/data/usuarios.json')
    return await response2.json()
}


fetchUsuarios().then(usuario => {
    usuarios = usuario;

})


let carrito = [];
let carritoSinDuplicados = [...new Set(carrito)];
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
let botonConfirmar = document.getElementById("boton__imprimir");
let botonCerrar = document.getElementById("boton__cerrar");
//elementos
let panel = document.getElementById("aplicacion__panel__lista__form");
let pantallaTotal = document.getElementById("aplicacion__total");


//eventos de escucha

botonAgregar.addEventListener("click",agregar);
botonMenos.addEventListener("click",menos);
botonLimpiar.addEventListener("click",limpiarPanel);
botonConfirmar.addEventListener("click",confirmar);
botonCerrar.addEventListener("click",cerrar);
//funciones


function agregar(){
    let referencia = document.getElementById("codigo");
    productos.forEach((producto)=>{
        if (referencia.value==producto.id){
            carrito.push(producto);
            
        }
        
    });
    carritoSinDuplicados = [...new Set(carrito)];
    panel.innerHTML = "";
    carritoSinDuplicados.forEach((item)=>{
        const miItem = productos.filter((itemBasDatos)=>{
            return itemBasDatos.id === parseInt(item.id);
        })
        const numeroUnidadesItem = carrito.reduce((total, itemId)=>{
            return itemId === item ? total+=1: total;
        },0);
        

        panel.innerHTML += `<div id="${miItem[0].nombre}"><input type="checkbox" id="check__${miItem[0].nombre}"><label>${miItem[0].nombre}, ${miItem[0].precio},Cantidad: ${numeroUnidadesItem},Total: ${numeroUnidadesItem*miItem[0].precio}</label></div>`;

    })
    

    imprimir();
}
function menos(){
    carritoSinDuplicados.forEach((item)=>{
        if(document.querySelector(`#${item.nombre}`).children[0].checked){
           carrito =  carrito.filter((e)=>e !== item);
            carritoSinDuplicados = [...new Set(carrito)];
            document.querySelector(`#${item.nombre}`).remove(`#check__${item.nombre}`);
            
            imprimir();
        }
    });

}


function limpiarPanel(){
    carrito = [];

    panel.innerHTML = `<div class="aplicacion__panel__lista></div>`;
    limpiarCampos();
    imprimir();
}
function imprimir(){
    
    pantallaTotal.innerHTML = carrito.reduce((acc,producto)=>acc+producto.precio,0);
}
function cerrar(){
    window.location.replace("/index.html");
}
function limpiarCampos(){
    document.getElementById("codigo").value = 1;
    pantallaTotal.innerHTML = 0;

}
function confirmar(){
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
      })
      
      swalWithBootstrapButtons.fire({
        title: '¿Estas seguro?',
        text: "Se agregara el pedido",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Si, confirmar',
        cancelButtonText: 'No, cancelar!',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire(
            'Agregado!',
            'Tu pedido fue agregado exitosamente.',
            'success'
          )
          limpiarPanel();
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            'Cancelled',
            'Revisa tu pedido',
            'error'
          )
        }
      })
}
