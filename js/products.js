//Analizando veo que puedo reutilizar el codigo usado en clase.
let arrProducto = [];

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
            mostrarProductosLista(arrProducto)
            console.log(arrProducto[0].cost);
        }
    });

    document.getElementById("btnLimpiar").addEventListener("click", function(){
        document.getElementById("rangeFilterCountMin").value = "";
        document.getElementById("rangeFilterCountMax").value = "";
        minCount = undefined;
        maxCount = undefined;
        mostrarProductosLista(arrProducto)
            
    });

});
