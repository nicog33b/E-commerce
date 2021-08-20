//Analizando veo que puedo reutilizar el codigo usado en clase.

function mostrarProductosLista(array){
//
//creo una variable que contendra en un string el contenido a agregar al html
    let agregarHtml= "";
    //el for recorre el array cada atributo antes de pasar al proximo indice del array obteniendo los datos necesarios
    //para rellenar los datos que nos interesan.-
    for(let i = 0; i < array.length; i++){
        let productos = array[i];

        agregarHtml += `
        <div class="list-group-item list-group-item-action">
            <div class="row">
                <div class="col-3">
                    <img src="` + productos.imgSrc + `" alt="` + "Imagen-de-producto"+ `" class="imagenProducto">
                </div>
                <div class="col">
                    <div class="d-flex w-100 justify-content-between">
                        <h4 class="nombreProducto">`+ productos.name+`</h4>
                     
                    </div>

                </div>
                <small class="descripcionProducto">` + productos.description+ `</small>
            </div>
        </div>
        `

        document.getElementById("lista-container").innerHTML = agregarHtml;
    }
}

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded",function(e){

    getJSONData(PRODUCTS_URL).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            objProductos= resultObj.data;
            hideSpinner();
            //Muestro las categorías ordenadas
            //console.log(mostrarProductosLista(productosArray));
            mostrarProductosLista(objProductos)
        }
    });

});
