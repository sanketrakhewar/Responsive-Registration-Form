let nameerror = document.getElementById("name-error");
let emailerror = document.getElementById("email-error");
let pass = document.getElementById("password");
let passerror = document.getElementById("password-error");
let str = document.getElementById("strength"); 
const passwordbox1 = document.getElementById("password");
const passwordbox = document.getElementById("passwordb");
const length = 10;
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "~!@#$%^&*()_-+={}[]|;<>,.?/";
const allChars = uppercase + lowercase + number + symbol;

pass.addEventListener('input', () =>{
    if(pass.value.length >= 0 ){
        passerror.style.display = "block"; 
        progressbarr.style.display = "block"; 
        progress.style.display = "block"; 


    }else{
        passerror.style.display = "none";
        progressbarr.style.display = "none"; 
        progressbary.style.display = "none"; 
        progressbarg.style.display = "none"; 


    }
    if(pass.value.length < 4){
        str.innerHTML = "Weak";
        progressbarr.style.display = "block"; 
        progressbary.style.display = "none"; 
        progressbarg.style.display = "none"; 
        pass.style.borderColor = "#ff5925";
        passerror.style.color = "#ff5925";
    }
    else if(pass.value.length >= 4 && pass.value.length < 8){
        str.innerHTML = "Medium";
        progressbary.style.display = "block"; 
        progressbarr.style.display = "none"; 
        progressbarg.style.display = "none"; 
        pass.style.borderColor = "blue";
        passerror.style.color = "blue";
    }
    else if(pass.value.length >= 10){
        str.innerHTML = "Strong";
        progressbarg.style.display = "block"; 
        progressbarr.style.display = "none"; 
        progressbary.style.display = "none";
        pass.style.borderColor = "green";
        passerror.style.color = "green";
    }
})



function createPasswordone(){
    let password = "";
    password += uppercase[Math.floor(Math.random() * uppercase.length)];
    password += lowercase[Math.floor(Math.random() * lowercase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];
        
    
    while(length >= password.length){
        progressbarg.style.display = "block"; 
        password += allChars[Math.floor(Math.random() * allChars.length)];
        passerror.style.display = "block"; 
        str.innerHTML = "Strong";
        pass.style.borderColor = "green";
        passerror.style.color = "green";
    }
    passwordbox1.value = password;
    progressbarg.style.display = "block"; 
    progress.style.display = "block"; 
    progressbarr.style.display = "none"; 
    progressbary.style.display = "none";
    eyeclick2()
    }
  


function createPassword(){
    let passwordb = "";
    passwordb += uppercase[Math.floor(Math.random() * uppercase.length)];
    passwordb += lowercase[Math.floor(Math.random() * lowercase.length)];
    passwordb += number[Math.floor(Math.random() * number.length)];
    passwordb += symbol[Math.floor(Math.random() * symbol.length)];

    while(length >= passwordb.length){
        passwordb += allChars[Math.floor(Math.random() * allChars.length)];
    }
    passwordbox.value = passwordb;
    progressbarg.style.display = "block";
    progress.style.display = "block"; 
    progressbarr.style.display = "none"; 
    progressbary.style.display = "none";
    eyeclick2()
}
function copypassword(){
    var copyText = document.getElementById("passwordb");
     // Select the text field
     passwordbox.select();
     passwordbox.setSelectionRange(0, 99999); // For mobile devices
     // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);

}

function validname() {
    let isname = document.getElementById("name").value;

    if(!isname.match(/^([a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)/)){
        nameerror.innerHTML = "Write Full Name";
        return false;
    }
    nameerror.innerHTML = '<i class="fa-solid fa-circle-check" style="color: seagreen;"></i>';
    return true;
}
function validemail() {
    let isemail= document.getElementById("email").value;

    if(!isemail.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
        emailerror.innerHTML = "Write Valid Email";
        return false;
    }
    emailerror.innerHTML = '<i class="fa-solid fa-circle-check" style="color: seagreen;"></i>';
    return true;
}


// eyeicon.onclick = function(){
function eyeClick(){
        document.getElementById("eyeicon").value;
    
    if(password.type == "password"){
        password.type = "text";
        eyeicon.src = "./img/eye-open.png";
    }else{
        password.type = "password";
        eyeicon.src = "./img/eye-close.png";

    }
}
function eyeclick2(){
    if(password.type == "password"){
        password.type = "text";
        eyeicon.src = "./img/eye-open.png";
    }
}