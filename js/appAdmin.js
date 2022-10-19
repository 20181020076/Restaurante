

let registros = []



async function fetchRegistros(){
  const response = await fetch('/data/registros.json')
  return await response.json()
}


fetchRegistros().then(registro => {
  registros = registro;

})

botonInventario.addEventListener("click",inventario);
botonRegistros.addEventListener("click",regi);

function inventario(){
    let nombresProductos = ""
    productos.forEach((producto)=>{
      nombresProductos+=`${producto.nombre} `
    })
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
function regi(){
  
  // Swal.fire({
  //   title: 'Inventario',
  //   text: 'Su inventario es: ' + registros,
  //   showClass: {
  //     popup: 'animate__animated animate__fadeInDown'
  //   },
  //   hideClass: {
  //     popup: 'animate__animated animate__fadeOutUp'
  //   }
  // })
  console.log(registros)
}