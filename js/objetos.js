class app{
    usuarios = [new usuario("ramon", "1234"), new usuario("empleado", "456")];
    productos = [new producto(1,"empanada",2500),new producto(2,"pastel",3000)];
    buttonValidar = document.getElementById("boton__validar");
    validar(){
        
        // this.usuarios.forEach((u)=>{
        //     // if(inputUser==u.user){
        //     //     if(inputPassword==u.password){
        //     //         console.log("entraste");
        //     //     }
        //     // }
        //     console.log(u)
        // });
        
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
const appe = new app();

appe.buttonValidar.addEventListener("click",appe.validar)


