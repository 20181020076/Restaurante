
botonInventario.addEventListener("click",inventario);
botonRegistros.addEventListener("click",registros);

function inventario(){
    Swal.fire({
        title: 'Inventario',
        text: 'Su inventario es: ' + nombresProductos,
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