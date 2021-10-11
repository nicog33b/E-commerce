let arrayCarrito = [];

agregarItemsAlCarrito = () => {

    let agregarAlCarrito = "";
    for (let i = 0; i < arrayCarrito.length; i++) {
        let carrito = arrayCarrito[i];
        agregarAlCarrito += `      
        <tr id="item">
        <td data-th="Product">
          <div class="row">
            <h5 class="nomargin">&nbsp;&nbsp;&nbsp;`+carrito.name+`</h4>
        
            <div class="col-sm-10">
              <div class="col-sm-2 hidden-xs"><img src="`+carrito.src+`" alt="..." class="img-responsive" width="200" ></div>
            
            </div>
          </div>
        </td>
        <div class="arregloTabla">
        <td class="text-cente"data-th="Price">`+carrito.unitCost+`</td>
        <td data-th="Quantity">
          <input type="number" class="form-control text-center" value="1">
        </td>
        <td data-th="Subtotal" class="text-center">1.99</td>
        </tr>
        </div>
        `
      
                  

        document.getElementById("itemsDelCarrito").innerHTML = agregarAlCarrito;

    }



}


document.addEventListener("DOMContentLoaded", function (e) {


    getJSONData(CART_INFO2_URL).then(function (carrito) {
        if (carrito.status === "ok") {
            buyCarInfo = carrito.data;
            arrayCarrito = carrito.data.articles;
            console.log(arrayCarrito)
            agregarItemsAlCarrito()





        }


    });
});