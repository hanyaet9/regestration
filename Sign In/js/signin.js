
// select elements in html
let signInEmail = document.querySelector(".email")
let signInPassword = document.querySelector(".password")
let signInBtn = document.querySelector(".sign-btn");
let signInMessage = document.querySelector(".signInalert")

// *********************************************************

// Saving users inputs
let allUsers = [];
allUsers = JSON.parse(localStorage.getItem("allUsers"));


// check User Sign In  
signInBtn.addEventListener('click', function(){
  if(signInEmail == '' || signInPassword == ''){
    signInMessage.innerHTML = `<h4 class ="text-danger text-center">All Inputs Is Required</h4>`
  }
  else{checkUser()}
})

// *********************************************

// Check User

function checkUser(){
  for(var i = 0; i < allUsers.length; i++ ){
    if(signInEmail.value == allUsers[i].email && signInPassword == allUsers[i].password){
      let welcomeName = allUsers[i].name;
      localStorage.setItem("userName" , welcomeName)
      window.open("../../Home/index.html" , "_self")
      break;
    }
  }
  
}
// console.log("mmmm0000000")
// console.log (window.open("../../Home/index.html" , "_self"))
