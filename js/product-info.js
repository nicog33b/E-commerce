llenarTitulo=() => {
document.getElementById("nombreProducto").innerText=productoInfo.name;
}

llenarImagenes=() => {

  document.getElementById("imgProd1").src=productoInfo.images[0]
  document.getElementById("imgProd2").src=productoInfo.images[1]
  document.getElementById("imgProd3").src=productoInfo.images[2]
  document.getElementById("imgProd4").src=productoInfo.images[3]
  document.getElementById("imgProd5").src=productoInfo.images[4]
}

llenarDescripcion=()=>{
  
    document.getElementById("descripcion_producto").innerHTML=productoInfo.description; 
}

llenarTablaDatosProducto=()=>{
    document.getElementById("precioProducto").innerHTML=productoInfo.cost;
    document.getElementById("monedaProducto").innerHTML=productoInfo.currency;
    document.getElementById("disponibleProducto").innerHTML=productoInfo.soldCount;
    document.getElementById("categoriaProducto").innerHTML=productoInfo.category;
  
}
document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(PRODUCT_INFO_URL).then(function(resultObj){
        if (resultObj.status === "ok"){
           productoInfo = resultObj.data;
          //rellenar el titulo del producto ref linea 1
           llenarTitulo();
           //rellenar las imagenes del producto ref linea 5
           llenarImagenes();
           //rellenar la descripción del producto ref linea 14
           llenarDescripcion();
           //mostrar aviso de stock y consultar al vendedor
           document.getElementById("avisoStock").innerHTML="Hay "+productoInfo.soldCount+" Disponibles"; 
         //llenar los datos de la tabla de información del producto ref linea 19
          llenarTablaDatosProducto()
          
        }

    
    });
   

});