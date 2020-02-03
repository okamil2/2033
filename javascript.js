function checkEmail () {
    var emailBox = document.getElementById("email");
    var email = emailBox.value;
    
    if (email.indexOf("@")>-1) {
        emailBox.style.borderColor = "green";
        
    } else {
        emailBox.style.borderColor = "red";
    }          
}

function checkPassword (){
    var passBox1 = document.getElementById("password");
    var password = passBox1.value;
    var passBox2 = document.getElementById("confirm");
    var confirm = passBox2.value;
    
    if(password == "" || password.length < 8){
        passBox1.style.borderColor = "red";
        passBox2.style.borderColor = "red";
    } else if (password != confirm){
        passBox2.style.borderColor = "red";
        passBox1.style.borderColor = "green";
    } else {
        passBox1.style.borderColor = "green";
        passBox2.style.borderColor = "green";
    }
}

function scroll() {
    var t = window.scrollY;
    var para = document.getElementById("para");
    var m = 0.5;
    var b = 0;
    newY = m*t +b;
    para.style.backgroundPositionY = newY + "px";
    var bmw = document.getElementById("bmw");
    if (t > 1000) {
        bmw.style.transform = "scale(2, 2)";            
    } 
}