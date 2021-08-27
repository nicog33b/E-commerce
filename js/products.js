//Utilizo un array global para que al ser cargado en la pagina pueda ser utilizado por otras funciones sin tener
//que llamar al getJson repetidamente.
let arrProducto = [];
//utilizado para poder limpiar(restablecer) la ventana a como por defecto.
let arrProductoLimpio = [];

/*Esta función sirvio de prueba para testear el funcionamiento del sort.*/
function analizador(array){
    for(let i = 0; i < array.length; i++){
 let precios=array[i]
console.log(precios.cost);
        }
}
function filtroRelevancia(){
    /*Con esta función  ayudamos al sort a comparar un numero a con el b y según cual es 
    negativo o positivo lo va ordenar antes o después
    
Si el resultado es negativo, a se ordena antes que b.
Si el resultado es positivo, b se ordena antes de a.
Si el resultado es 0, nada cambia.*/

arrProducto.sort(function(a, b){return b.soldCount - a.soldCount
})};
function filtroAscendentePrecio(){
    /*Con esta función  ayudamos al sort a comparar un numero a con el b y según cual es 
    negativo o positivo lo va ordenar antes o después
    
Si el resultado es negativo, a se ordena antes que b.
Si el resultado es positivo, b se ordena antes de a.
Si el resultado es 0, nada cambia.*/

arrProducto.sort(function(a, b){return a.cost - b.cost
})};

function filtroDescendentePrecio(){
    /*Con esta función  ayudamos al sort a comparar un numero a con el b y según cual es 
    negativo o positivo lo va ordenar antes o después
    
Si el resultado es negativo, b se ordena antes que a.
Si el resultado es positivo, a se ordena antes de b.
Si el resultado es 0, nada cambia.*/

arrProducto.sort(function(a, b){return b.cost - a.cost
})};


function mostrarProductosLista(array){
//
//creo una variable que contendra en un string el contenido a agregar al html
    let agregarHtml= "";
    //el for recorre el array cada atributo antes de pasar al proximo indice del array obteniendo los datos necesarios
    //para rellenar los datos que nos interesan.-
    for(let i = 0; i < array.length; i++){
        let product = array[i];

        agregarHtml += `
        <a href="product-info.html" class="list-group-item list-group-item-action">
        <div class="row">
            <div class="col-3">
                <img src="` + product.imgSrc + `" alt="` + product.description + `" class="img-thumbnail">
            </div>
            <div class="col">
                <div class="d-flex w-100 justify-content-between">
                    <h4 class="mb-1">`+ product.name +`</h4>
                    <small class="text-muted">` + product.soldCount + ` venididos</small>
                </div>
                <div class="d-flex w-100 justify-content-between" >
                <p class="mb-1">` + product.description + `</p>
                <p> ` + product.currency + ``+ product.cost +`
                </p>
                </div>
            </div>
        </div>
    </a>
    `

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
    filtroRelevancia()
    mostrarProductosLista(arrProducto);
});
    document.getElementById("sortDesc").addEventListener("click",function(){

    filtroDescendentePrecio()
        mostrarProductosLista(arrProducto);

    });
document.getElementById("sortAsc").addEventListener("click",function(){

    filtroAscendentePrecio();
    mostrarProductosLista(arrProducto);
    
});

    document.getElementById("btnLimpiar").addEventListener("click", function(){
        /*El valor ingresado en los textboxs(min,max) son vaciados.*/ 
        document.getElementById("filtrarMinimo").value = "";
        document.getElementById("filtrarMaximo").value = "";
                 
        
        mostrarProductosLista(arrProductoLimpio);

     
    });

});
