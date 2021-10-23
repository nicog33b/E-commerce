
//contiene el array de los productos durante la ejecución.
let arrProducto = [];
//según el valor, selecciona un tipo de filtrado.
let tipoFiltro=0;
/*se inicializan las variables que contienen 
el minimo y maximo rango de precios buscado 
por el usuario.
*/
let minimoP=undefined;
let maximoP=undefined;






function filtroAscDescRel(){
    if (tipoFiltro===1) {
        arrProducto.sort(function(a, b){return b.soldCount - a.soldCount});
      } else if (tipoFiltro===2) {
        arrProducto.sort(function(a, b){return b.cost - a.cost});
      } else {
        arrProducto.sort(function(a, b){return a.cost - b.cost});
     
      }
};



function mostrarProductosLista(){
//
//creo una variable que contendra en un string el contenido a agregar al html
    let agregarHtml= "";
    //el for recorre el array cada atributo antes de pasar al proximo indice del array obteniendo los datos necesarios
    //para rellenar los datos que nos interesan.-
    for(let i = 0; i < arrProducto.length; i++){
        let product = arrProducto[i];

        if (((minimoP== undefined) || (minimoP != undefined && parseInt(product.cost) >= minimoP)) &&
            ((maximoP == undefined) || (maximoP  != undefined && parseInt(product.cost) <= maximoP))){
        agregarHtml += `
 
        <div class="col-md-4">
        <a href="product-info.html" class="card mb-4 shadow-sm custom-card">
          <img class="bd-placeholder-img card-img-top" src="` + product.imgSrc + `">
          <h3 id="nameProducto" class="m-3">`+ product.name +`</h3>
          <div class="card-body">
            <p class="card-text">` + product.description + `</p>
            <p id="precioProducto"> ` + product.currency + ``+ product.cost +`
            </p>
          </div>
        </a>
    </div>

    `
            }
        document.getElementById("lista-container").innerHTML = agregarHtml;
    
    }
}


//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded",function(e){
    getJSONData(PRODUCTS_URL).then(function(resultObj){
        if (resultObj.status === "ok"){
            hideSpinner();
            arrProducto= resultObj.data;
            arrProductoLimpio=resultObj.data;
            mostrarProductosLista(arrProductoLimpio);
        
           
        }
    });




    document.getElementById("sortRel").addEventListener("click",function(){
        tipoFiltro=1;
        filtroAscDescRel();
        mostrarProductosLista()
});
    document.getElementById("sortDesc").addEventListener("click",function(){
tipoFiltro=2;
filtroAscDescRel();
mostrarProductosLista()

    });
document.getElementById("sortAsc").addEventListener("click",function(){
tipoFiltro=3;
filtroAscDescRel();
mostrarProductosLista()
    
});

    document.getElementById("btnLimpiar").addEventListener("click", function(){
        hideSpinner();        
        document.location.href="products.html"
    
    });

    document.getElementById("btnFiltrar").addEventListener("click",function(){
        minimoP= document.getElementById("filtrarMinimo").value;
        maximoP= document.getElementById("filtrarMaximo").value;
        if ((minimoP != undefined) && (minimoP != "") && (parseInt(minimoP)) >= 0){
            minimoP = parseInt(minimoP);
        }
        else{
            minimoP = undefined;
        }

        if ((maximoP != undefined) && (maximoP != "") && (parseInt(maximoP)) >= 0){
            maximoP = parseInt(maximoP);
        }
        else{
            maximoP = undefined;
        }
      
            mostrarProductosLista()
          
        
    });
    

  
});
