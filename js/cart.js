let arrayCarrito = [];
let tipoMoneda = 0;
const premium = 15;
const express = 7
const standard = 5;



function clearGroup(elem) {
  //si uno esta activado los demás estan desactivados.
  var group = document.getElementsByClassName("checkGroup1");
  for (var i = 0; i < group.length; i++) {
    if (group[i] != elem) {
      group[i].checked = false;
    }
  }
  //evita que los usuarios dejen desmarcadas todas las opciones de envio.
  for (var i = 0; i < group.length; i++) {
    if (group[i].checked != elem) {
      elem.checked = true;
    }
  }
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
    document.getElementById("subtotal" + [i]).innerHTML = unitPrice * productActual + " USD";


  }
  let subtotal = 0;
  let envio = 0;
  for (var i = 0; i < arrayCarrito.length; i++) {

    newSubtotal = parseFloat(document.getElementById("subtotal" + [i]).textContent);
    subtotal = subtotal + newSubtotal;
    document.getElementById("subtotal").innerHTML = "$" + subtotal + " USD";
    if (document.getElementById("standardEnvio").checked) {
      envio = (subtotal * standard) / 100
      document.getElementById("envio").innerHTML = envio + " USD";
    } else if (document.getElementById("expressEnvio").checked) {
      envio = (subtotal * express) / 100
      document.getElementById("envio").innerHTML = envio + " USD";
    } else if (document.getElementById("premiumEnvio").checked) {
      envio = (subtotal * premium) / 100;
      document.getElementById("envio").innerHTML = envio + " USD";
    }
    document.getElementById("total+iva").innerHTML = subtotal + envio + " USD";
    document.getElementById("total").innerHTML = subtotal + envio + " USD";
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
        <tr id="`+ "item" + numProd + `" >
        <td data-th="Product">
               <div class="row">
              <h5 class="nomargin">&nbsp;&nbsp;&nbsp;`+ carrito.name + `</h4>                   
            <div class="col-sm-10">
              <div class="col-sm-2 hidden-xs"><img src="`+ carrito.src + `" alt="..." class="img-responsive" width="200" ></div>
             </div>
          </div>
        </td>
        <div class="arregloTabla">
        <td class="text-center" data-th="Price">`+ unitPrice + " " + " USD" + `</td>
        <td data-th="Quantity">
          <input id="`+ "producto" + numProd + `" min="1" pattern="^[0-9]+" oninput="loadItemsSubtotal()" type="number" class="form-control text-center" value="1">
        </td>
        <td class="text-center" data-th"Delete">
        <button id="`+ "remove" + numProd + `" onclick="deleteItem(this) "class="btn btn-danger btn-sm rounded-0" type="button"  data-placement="top" title="Delete"><i class="fa fa-trash"></i>X</button>
        </td>
        <td id="`+ "subtotal" + numProd + `"  data-th="Subtotal" class="text-center">` + +`</td>
         </tr>
        </div>
        `



    document.getElementById("itemsDelCarrito").innerHTML = agregarAlCarrito;
    numProd += 1;

  }
}

deleteItem = (b) => {
  //obtiene el id del boton que fue clickeado.
  //replace usando una expresion regular obtenemos el numero que corresponde al item del carrito.
id=b.id.replace(/[^0-9]/g,'');

//Eliminamos el item seleccionado de html.
idToDelete="item"+id;
subtotalToDelete="subtotal"+id
removePrice=parseFloat(document.getElementById(subtotalToDelete).textContent)
console.log(document.getElementById("total+iva").textContent)
document.getElementById(idToDelete).innerHTML="";



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

      document.getElementById("premiumEnvio").addEventListener('click', function () {

        loadItemsSubtotal()

      });
      document.getElementById("expressEnvio").addEventListener('click', function () {
        loadItemsSubtotal()

      });
      document.getElementById("standardEnvio").addEventListener('click', function () {
        loadItemsSubtotal()

      });



    }


  });
});