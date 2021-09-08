let productoInfo=[];
document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(PRODUCT_INFO_URL).then(function(resultObj){
        if (resultObj.status === "ok"){
           productoInfo = resultObj.data;
          
        }
    });
    document.getElementById("nombreProducto").innerText=productoInfo.name;
});