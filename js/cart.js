let arrayCarrito=[];

agregarProductosRelacionados=()=>{



    
}


document.addEventListener("DOMContentLoaded", function(e){


    getJSONData(CART_INFO2_URL).then(function (carrito) {
        if (carrito.status === "ok") {
            buyCarInfo= carrito.data;
            arrayCarrito=carrito.data;    

alert(arrayCarrito)




        }


    });
});