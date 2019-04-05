var obj = JSON.parse(localStorage.myJSON);
var count = localStorage.purGui;

document.getElementById('purchase-img').src = "resources/style/image/" + obj.allProducts[count].image_path;
document.getElementById('pro-des').innerHTML =  obj.allProducts[count].product_description;


function seeReview(){
    
    var firstName = document.getElementById('fName').value;
    var lastName = document.getElementById('lName').value;
    var addre = document.getElementById('address').value;
    var city = document.getElementById('city').value;
    var state = document.getElementById('state-sel').value;
    var pin = document.getElementById('pin').value;
    var Email = document.getElementById('email').value;
    var pnum = document.getElementById('phone').value;
    var creditCard = document.getElementById('cCard').value;
    var exDate = document.getElementById('expireDate').value;
    var cvvCode = document.getElementById('cvv').value;
    
    document.getElementById('firstN').innerHTML = firstName;
    document.getElementById('lastN').innerHTML = lastName;
    document.getElementById('addr').innerHTML = addre;
    document.getElementById('cit').innerHTML = city;
    document.getElementById('stat').innerHTML = state;
    document.getElementById('pCode').innerHTML = pin;
    document.getElementById('eAdd').innerHTML = Email;
    document.getElementById('pNum').innerHTML = pnum;
    document.getElementById('cNum').innerHTML = creditCard;
    document.getElementById('eDate').innerHTML = exDate;
    document.getElementById('code').innerHTML = cvvCode;
    
    document.getElementById('fName').value = "";
     document.getElementById('lName').value = "";
    document.getElementById('address').value = "";
    document.getElementById('city').value = "";
     document.getElementById('state-sel').value = "";
    document.getElementById('pin').value = "";
     document.getElementById('email').value = "";
     document.getElementById('phone').value = "";
     document.getElementById('cCard').value = "";
    document.getElementById('expireDate').value = "";
    document.getElementById('cvv').value = "";
    
    
    
    document.getElementById('form').style.display = "none";
    document.getElementById('form-data').style.display = "block";
}

function edit(){
    
    var firstName = document.getElementById('fName');
    var lastName = document.getElementById('lName');
    var addre = document.getElementById('address');
    var city = document.getElementById('city');
    var state = document.getElementById('state-sel');
    var pin = document.getElementById('pin');
    var Email = document.getElementById('email');
    var pnum = document.getElementById('phone');
    var creditCard = document.getElementById('cCard');
    var exDate = document.getElementById('expireDate');
    var cvvCode = document.getElementById('cvv');
    
    firstName.value = firstN.textContent;
    lastName.value = lastN.textContent;
    addre.value = addr.textContent;
    city.value = cit.textContent;
    state.value = stat.textContent;
    pin.value = pCode.textContent;
    Email.value = eAdd.textContent;
    pnum.value = pNum.textContent;
    creditCard.value = cNum.textContent;
    exDate.value = eDate.textContent;
    cvvCode.value = code.textContent;
    
    
    document.getElementById('form').style.display = "block";
    document.getElementById('form-data').style.display = "none";
}

function confirm(){
localStorage.purGui = count;
window.location.href = "confirmation.html";
}