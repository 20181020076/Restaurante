
let usuarios = []

async function fetchUsuarios(){
    const response = await fetch('/data/usuarios.json')
    return await response.json()
}


fetchUsuarios().then(usuario => {
    usuarios = usuario;

})

let botonValidar = document.getElementById("boton__validar");

botonValidar.addEventListener("click",validar);

function validar(){
    let user_digitado = document.getElementById("user").value;
    let password_digitado = document.getElementById("password").value;
    let estado = true;
    let contador = 0;
    for(let i = 0; i<usuarios.length; i++){
        if(usuarios[i].user == user_digitado){
            if(usuarios[i].password == password_digitado){
                if(usuarios[i].estado == "admin"){
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
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Usuario o Contraseña incorrecta',
          })
        
    }
    
    

}