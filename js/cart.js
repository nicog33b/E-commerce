let arrayCarrito = [];
let tipoMoneda = 0;

loadPaymentsInfo = () => {
  let subtotal=0;
  for (var i = 0; i < arrayCarrito.length; i++) {
    let carrito = arrayCarrito[i];
    subtotal=subtotal+parseFloat(document.getElementById("subtotal" + [i]).value);
  
      

  }
  document.getElementById("subtotal").innerHTML =subtotal; 

}


loadItemsSubtotal = () => {
  for (var i = 0; i < arrayCarrito.length; i++) {
    let carrito = arrayCarrito[i];
    var productActual = parseFloat(document.getElementById("producto" + [i]).value)

    let unitPrice = 0;
    if (carrito.currency === "USD") {
      unitPrice = carrito.unitCost
    } else if (carrito.currency = "UYU") {
      unitPrice = (carrito.unitCost / 40).toFixed(2);
    }
    document.getElementById("subtotal" + [i]).innerHTML = unitPrice * productActual;
    

  }
  let subtotal=0;
  for (var i = 0; i < arrayCarrito.length; i++) {

    newSubtotal=parseFloat(document.getElementById("subtotal" + [i]).textContent);
    subtotal=subtotal+newSubtotal;
    document.getElementById("subtotal").innerHTML="$"+subtotal;

  }

}

loadCountrySelect = () => {
  var departamentos = ["MONTEVIDEO", "ARTIGAS", "CANELONES", "CERRO LARGO", "COLONIA", "DURAZNO", " FLORES", "FLORIDA",
    " LAVALLEJA", "MALDONADO", "PAYSANDU", "RIO NEGRO"]; //array de los departamentos.
  var select = document.getElementById("selectCountry"); //Seleccionamos el select

  for (var i = 0; i < departamentos.length; i++) {
    var option = document.createElement("option"); //Creamos la opcion
    option.innerHTML = departamentos[i]; //Metemos el texto en la opción
    select.appendChild(option); //Metemos la opción en el select
  }
}


changeCurrencyPrice = () => {

  let currency = getElementById("selectCurrency")

}

addItemToCart = () => {

  let numProd = 0;
  //Recorre el json con los productos del carrito y su información.
  let agregarAlCarrito = "";
  for (let i = 0; i < arrayCarrito.length; i++) {
    let carrito = arrayCarrito[i];


    //si esta en pesos uruguayos los transforma en dolares.
    let unitPrice = 0;
    if (carrito.currency === "USD") {
      unitPrice = carrito.unitCost
    } else if (carrito.currency = "UYU") {
      unitPrice = (carrito.unitCost / 40).toFixed(2);
    }


    agregarAlCarrito += `      
        <tr id="item">
        <td data-th="Product">
          <div class="row">
            <h5 class="nomargin">&nbsp;&nbsp;&nbsp;`+ carrito.name + `</h4>
        
            <div class="col-sm-10">
              <div class="col-sm-2 hidden-xs"><img src="`+ carrito.src + `" alt="..." class="img-responsive" width="200" ></div>
            
            </div>
          </div>
        </td>
        <div class="arregloTabla">
        <td class="text-cente"data-th="Price">`+ unitPrice + `<br>` + "USD" + `</td>
        <td data-th="Quantity">
          <input id="`+ "producto" + numProd + `" min="1" pattern="^[0-9]+" oninput="loadItemsSubtotal()" type="number" class="form-control text-center" value="1">
        </td>
        <td id="`+ "subtotal" + numProd + `"  data-th="Subtotal" class="text-center">` + +`</td>
        </tr>
        </div>
        `



    document.getElementById("itemsDelCarrito").innerHTML = agregarAlCarrito;
    numProd += 1;

  }



}




document.addEventListener("DOMContentLoaded", function (e) {

  loadCountrySelect()
  getJSONData(CART_INFO2_URL).then(function (carrito) {
    if (carrito.status === "ok") {
      buyCarInfo = carrito.data;
      arrayCarrito = carrito.data.articles;
      console.log(arrayCarrito)
      addItemToCart()
      loadItemsSubtotal()
 



    }


  });
});