
botonInventario.addEventListener("click",inventario);
botonRegistros.addEventListener("click",registros);

function inventario(){
    Swal.fire({
        title: 'Custom animation with Animate.css',
        text: 'Su inventario es' + nombresProductos,
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      })
}
function registros(){
    console.log("registros")
}