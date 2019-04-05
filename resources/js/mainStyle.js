var prcsdt = document.getElementById('csds1');
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
        
        prcsdt.innerHTML = obj.allProducts[0].csds1;
    }
}