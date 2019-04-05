var primg = document.getElementById('img-main');
var prdet = document.getElementById('product-details');
var prshdt = document.getElementById('shipping-details');
var prcsdt = document.getElementById('customer-reviews');
var rasp;
var obj;



    var xhttp = new XMLHttpRequest();
    xhttp.open('GET', 'guitardata.json', true);
    xhttp.send();
    xhttp.onreadystatechange = function(){
        if(xhttp.readyState == 4 && xhttp.status == 200){
            resp = xhttp.responseText;
            obj = JSON.parse(resp);
            localStorage.myJSON = JSON.stringify(obj);
            
            primg.src = "resources/style/image/" + obj.allProducts[0].image_path;
            prdet.innerHTML = obj.allProducts[0].product_description;
            prshdt.innerHTML = obj.allProducts[0].shipping_details;
            prcsdt.innerHTML = obj.allProducts[0].customer_reviews;
        }
    }


var i = 1;
var count = 0;
function nextFun(j){
 if(count == 2 ){
     i = 0;
     count = -1;
 }else{
     i = count + 1;
 }
    count++;
    primg.src = "resources/style/image/" + obj.allProducts[i].image_path;
    prdet.innerHTML = obj.allProducts[i].product_description;
    prshdt.innerHTML = obj.allProducts[i].shipping_details;
    prcsdt.innerHTML = obj.allProducts[i].customer_reviews;
}

function prevFun(){
    if(count == 0 ){
     i = 2;
     count = 3;
 }else{
     i = count - 1;
 }
    count--;
    primg.src = "resources/style/image/" + obj.allProducts[i].image_path;
    prdet.innerHTML = obj.allProducts[i].product_description;
    prshdt.innerHTML = obj.allProducts[i].shipping_details;
    prcsdt.innerHTML = obj.allProducts[i].customer_reviews;
}

function buy(){
localStorage.purGui = count;
window.location.href = "review.html";
}


var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}