let usuarios=[{u:"ramon",p:"1234",e:"admin"},{u:"empleado1",p:"456",e:"empleado"}];
let productos=[{nombre:"empanada",precio:2000,codigo:1},{nombre:"pastel",precio:2500,codigo:2}];
let carrito = [];
let nombres = usuarios.map(function(user){
    return user.u;
});

panel = document.getElementById("aplicacion__panel__lista");


// console.log(nombres);
// console.log(productos);

function validar(){
    let user_digitado = document.getElementById("user").value;
    let password_digitado = document.getElementById("password").value;
    let estado = true;
    let contador = 0;
    for(let i = 0; i<usuarios.length; i++){
        if(usuarios[i].u == user_digitado){
            if(usuarios[i].p == password_digitado){
                if(usuarios[i].e == "admin"){
                    window.location.replace("/pages/admin.html");
                }else{
                    window.location.replace("/pages/empleado.html");
                }
                
            }else{
                estado = false;
            }
        }else{
            contador++;
        }
    }
    if(estado==false || contador == usuarios.length){
        alert("corrija el usuario o la contraseña");
    }
    
    

}
function agregar(){
    referencia = document.getElementById("codigo");
    console.log(referencia);
    productos.forEach((producto)=>{
        if (referencia.value==producto.codigo){
            carrito.push(producto)
            panel.innerHTML += `<div class="aplicacion__panel__lista__item">${producto.nombre}, ${producto.precio}</div>`;
        }
    });
}

function inventario(){
    carrito = [];
    panel.innerHTML = `<div class="aplicacion__panel__lista></div>`;
    productos.forEach((producto)=>{
        panel.innerHTML += `<div class="aplicacion__panel__lista__item">${producto.nombre}, ${producto.precio}</div>`
    });
}
function limpiar(){
    carrito = [];
    panel.innerHTML = `<div class="aplicacion__panel__lista></div>`;
}
function imprimir(){
    console.log(carrito);
}
function cerrar(){
    window.location.replace("/index.html");
}