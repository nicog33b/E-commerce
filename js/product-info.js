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


function mostrarListaComentarios(comment){
    //
    //creo una variable que contendra en un string el contenido a agregar al html
        let agregarComentario= "";
        //el for recorre el array cada atributo antes de pasar al proximo indice del array obteniendo los datos necesarios
        //para rellenar los datos que nos interesan.-
        for(let i = 0; i < comment.length; i++){
            let comentario= comment[i];
            

            agregarComentario += `
        
              <div class="container">
                <div class="row align-items-center justify-content-center">
                      <div class="col-12 col-md-7">
                        <p class="text-h3 mt-2"><strong> `+ comentario.user +`</strong>   
                          &nbsp;
                          <span  class="fa fa-star"></span>
                          <span  class="fa fa-star"></span>
                          <span  class="fa fa-star"></span>
                          <span  class="fa fa-star"></span>
                          <span  class="fa fa-star"></span></p>
                    <p class="comentarioUsuario" >
                    `+ comentario.description +`
                    </p>
                 
                  </div>
                  `
                
            document.getElementById("cajaComentarios").innerHTML = agregarComentario;
        
        }
    }


document.addEventListener("DOMContentLoaded", function(e){
  
    document.getElementById("star1").addEventListener("click", function(){
        star1();
});

document.getElementById("star2").addEventListener("click", function(){
    star2();
    });

    document.getElementById("star3").addEventListener("click", function(){
        star3();
        });

        document.getElementById("star4").addEventListener("click", function(){
            star4();
            });

            document.getElementById("star5").addEventListener("click", function(){
                star5();
                });


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

    
    getJSONData(PRODUCT_INFO_COMMENTS_URL).then(function(resultObj){
        if (resultObj.status === "ok"){
           productoComentario = resultObj.data;
           mostrarListaComentarios(productoComentario);
        }

    
    });
   

});