const userOn = document.getElementById("usuario");
const close = document.getElementById("cerrar")
let username= JSON.parse(localStorage.getItem('userConectado'))
if(username != null){
 userOn.innerText=username[0].usuario;
}else{
    userOn.innerText="Inicia Sesion"
}
console.log(username[0].usuario);

document.getElementById("cerrar").addEventListener("click",function(){
    localStorage.removeItem("userConectado");
  })