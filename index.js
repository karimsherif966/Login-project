// variables
var userName = document.getElementById("nameSignUp");
var userEmail = document.getElementById("emailSignUp");
var userPassword = document.getElementById("passwordSignUp"); 
var logInEmail=  document.getElementById("logInEmail"); 
var logInPassword=  document.getElementById("logInPassword"); 
var usersArr=[];
var sessionUsername=localStorage.getItem("sessionUsername")
var logOutBtn=document.getElementById("logOutBtn")
var welcomePage=document.getElementById("welcome")

// to get data from local storage//
if(localStorage.getItem("userData")!=null){
    usersArr=JSON.parse(localStorage.getItem("userData"))
}
                              //////////// For sign up//////////

// sign up function//
function signUp(){
    document.getElementById("success").style.display="none";
    if(validateName()){
        if(validateEmail()){
            if(  validatePassword() ){
                {
                    user={
                        name:userName.value, 
                        email:userEmail.value,
                        password:userPassword.value
                    }
                    usersArr.push(user);
                    localStorage.setItem("userData",JSON.stringify(usersArr))
                    console.log(usersArr);
                    document.getElementById("success").style.display="inherit";

                }
            }
        }
       
    }
    
}

// name validation //
function validateName(){
    document.getElementById("wrongName").style.display="none";
    document.getElementById("nameInUse").style.display="none";
  var nameRGEX=/^\w{3,}/gmi;
  for ( var i=0;i<usersArr.length;i++){
    if(userName.value===usersArr[i].name){
        document.getElementById("nameInUse").style.display="inherit";
        return false;
    } 
    }
    if ( nameRGEX.test(userName.value)==false){
        document.getElementById("wrongName").style.display="inherit";
        return false;
    }
    else{
        return true;
    }
}

// email validation//
function validateEmail(){
    document.getElementById("wrongEmail").style.display="none";
    document.getElementById("emailInUse").style.display="none";
  var emailRGEX=/^[A-Z0-9._]+@[A-Z0-9.-]+\.[A-Z]{2,}$/gmi;
  for ( var i=0;i<usersArr.length;i++){
    if(userEmail.value===usersArr[i].email){
        document.getElementById("emailInUse").style.display="inherit";
        return false;
    } 
    }
    if ( emailRGEX.test(userEmail.value)==false){
        document.getElementById("wrongEmail").style.display="inherit";
        return false;
    }
    else{
        return true;
    }
}

// password validation//
function validatePassword(){
    document.getElementById("wrongPassword").style.display="none";
  var passwordRGEX=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)[a-zA-Z0-9\W]{8,}$/;
  
    if ( passwordRGEX.test(userPassword.value)==false){
        document.getElementById("wrongPassword").style.display="inherit";
        return false;
    }
    else{
        return true;
    }
}
                                ////////For login/////////////

 // login function//
 function logIn(){
    if(checkInputData()){
        window.location.href = "welcome.html";
    }
 }

 //check input data//
 function checkInputData(){
    document.getElementById("wrongInput").style.display="none";
    for (var i=0;i<usersArr.length;i++){
        if(logInEmail.value===usersArr[i].email && logInPassword.value===usersArr[i].password){
            localStorage.setItem("sessionUsername",usersArr[i].name);
            return true;
        }
    }
    document.getElementById("wrongInput").style.display="inherit";
    
 }

 //to say welcome 
 welcomePage.textContent="Welcome"+ " "+sessionUsername

 //logout function
 function logOut(){
    localStorage.removeItem("sessionUsername");
    window.location.href = "index.html";

 }
 logOutBtn.addEventListener("click",logOut)





 
















 









