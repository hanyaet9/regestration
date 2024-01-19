
// select elements in Sign Up html
let nameInput = document.querySelector(".name");
let emailInput = document.querySelector(".email");
let passwordlInput = document.querySelector(".password");
let signUpBtn = document.querySelector(".sb");
let alertMessage = document.querySelector('.alert');


// Saving users inputs
let allUsers = [];
if(localStorage.getItem("allUsers") != null){
allUsers = JSON.parse(localStorage.getItem("allUsers"))
}
else{allUsers = [];}

function signIn(){
if(nameInput.value == "" || emailInput.value == "" || passwordlInput == ""){
 alertMessage.innerHTML = `<h4 class="text-danger">All Inputs Is Required</h4>`;
}

else {var newUser = {
        name : nameInput.value,
        email : emailInput.value,
        password : passwordlInput.value,
    }
    allUsers.push(newUser)
    window.open("./Sign In/index.html" , "_Self")
    localStorage.setItem("allUsers" , JSON.stringify(allUsers))
  }   
}

signUpBtn.addEventListener('click' , function(){
  signIn(); 
  clearSignUp()
})

// clearing date from sign in inputs
function clearSignUp(){
  nameInput.value = "";
  emailInput.value = "";
  passwordlInput.value = "";
}


// signIn()



// if(validatingSignInEmail() == true && validatingSignInPassword() == true ){}
// else{alert("Your Email or Password is not valid Please check it")}

// allUsers.push(mainUser)  

// localStorage.setItem("allUsers",JSON.stringify(allUsers))

//     clearSignIn();
//     usertitle();

//     console.log(allUsers)
    




// signUp()
// function signUp(){
//     var user = {
//         name : nameInput.value,
//         email : emailInput.value,
//         password : passwordlInput.value,
//     }


//   //   

    
// }



// // clearing date from sign up inputs
// function clearSignUp(){
//     nameInput.value = "",
//     emailInput.value = "";
//     passwordlInput.value = "";
// }

// signInBtn.addEventListener ("click" , signIn)
// signUpBtn.addEventListener ("click" , signUp)    


// validating Old User's Email
// function validatingSignInEmail(){
//   var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
//   return emailRegex.test(emailInput.value);
// }

// // validating Old User's Password
// function validatingSignInPassword() {
//   var passwordRegex = /^[a-z]{1}[0-9]{3,}$/  
//   return passwordRegex.test(passwordlInput.value);
// }


// // validating New user,s Email
// function validatingSignUp(){
//   var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
//   return emailRegex.test(emailInput.value);
    
//   }


//   // validating New user,s Name
//   function validatingSignUpName(){
//     var nameRegex = /^[A-Z]{1}[a-z]{2,}&/;
//     return nameRegex.test(nameInput.value);
// }


// if(validatingSignUp() == true && validatingSignUpName() == true){
  //       window.open("./signin.html")
  //     }

  //   else{alert("The Email is not valid you can not sign up")}

  //  allUsers.push(user)
   