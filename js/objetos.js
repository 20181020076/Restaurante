class app{
    constructor(usuarios,productos){
        this.usuarios = usuarios;
        this.productos = productos;
        this.buttonValidar = document.getElementById("boton__validar");
    }
    escucha(){
        this.buttonValidar.onclick =  this.validar;  
    }
    validar(){
        return console.log(this.usuarios);
        
    }
}
class usuario {
    constructor(user,password){
        this.user = user;
        this.password = password;
    }
}
class producto{
    constructor(id,nombre,precio){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
    };  

}
const usuariosLista = {
    "admin": new usuario("ramon", "1234"),
    "empleado1": new usuario("empleado", "456"),
};
const productosLista = {
    "empanada": new producto(1,"empanada",2500),
    "pastel": new producto(2,"pastel",3000),
}
console.log(productosLista);
console.log(usuariosLista);

const appe = new app(usuariosLista,productosLista);
appe.escucha();

// appe.buttonValidar.addEventListener("click",appe.validar())


