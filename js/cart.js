let arrayCarrito = [];
let tipoMoneda=0;


loadCountry = () =>{

  var paises = ["Uruguay", "Chile", "Argentina", "Brasil", "Ecuador","EE.UU","China"];
  var countrySelect = document.getElementById("countryCart");
  for(var i=0;i<paises.length;i++){ 
    countrySelect.options[i] = new option(countrySelect[i]);
   }
}

changeCurrencyPrice = () =>{

 let currency = getElementById("selectCurrency")

}

addItemToCart = () => {

let numProd=0;
//Recorre el json con los productos del carrito y su información.
    let agregarAlCarrito = "";
    for (let i = 0; i < arrayCarrito.length; i++) {
        let carrito = arrayCarrito[i];
        

//si esta en pesos uruguayos los transforma en dolares.
        let unitPrice=0;
        if(carrito.currency==="USD"){
          unitPrice=carrito.unitCost
        }else if(carrito.currency="UYU"){
          unitPrice=(carrito.unitCost/40).toFixed(2);
        }

        
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
        <td class="text-cente"data-th="Price">`+unitPrice+`<br>`+"USD"+`</td>
        <td data-th="Quantity">
          <input id="`+"producto"+numProd+`" type="number" class="form-control text-center" value="1">
        </td>
        <td id="`+"subtotal"+numProd+`" data-th="Subtotal" class="text-center">`+ +`</td>
        </tr>
        </div>
        `

                  
       
        document.getElementById("itemsDelCarrito").innerHTML = agregarAlCarrito;
        numProd+=1;

    }



}


document.addEventListener("DOMContentLoaded", function (e) {
  

    getJSONData(CART_INFO2_URL).then(function (carrito) {
        if (carrito.status === "ok") {
            buyCarInfo = carrito.data;
            arrayCarrito = carrito.data.articles;
            console.log(arrayCarrito)
            addItemToCart()
            loadCountry()





        }


    });
});