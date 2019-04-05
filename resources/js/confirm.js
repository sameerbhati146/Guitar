var obj = JSON.parse(localStorage.myJSON);
var count = localStorage.purGui;

document.getElementById('confirm-img').src = "resources/style/image/" + obj.allProducts[count].image_path;
