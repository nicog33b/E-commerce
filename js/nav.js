//obtiene usuario logeado
const userOn = document.getElementById("usuario");
//obtiene el boton que cierra la sesion.
const close = document.getElementById("cerrar")
//la variable username contiene un array con los datos de iniio de sesion del usuario.
let username= JSON.parse(localStorage.getItem('userConectado'))
//obtiene 
let userNombre=document.getElementById("userNombre");


if(username != null){
 userOn.innerText=username[0].usuario;
 }else{
     //Cambia el texto del boton
    userOn.innerText="Inicia Sesion"
    //no muestra las opciones cerrar sesion y carrito porque no esta logeado.
    document.getElementById("mostrarOcultar").style.display="none";
    //redirije al index para poder logear o registrarse en el hipotetico caso que existiera registro.
    document.getElementById("usuario").addEventListener("click",function(){
        window.location.href="index.html";
      })
    
}
console.log(username[0].usuario);

document.getElementById("cerrar").addEventListener("click",function(){
    localStorage.removeItem("userConectado");
  })
