
// select elements in html
let homeName = document.querySelector(".home-name")
let logOutBtn = document.querySelector('.logOut');

// *******************************************************


homeName.innerHTML = localStorage.getItem('userName');


// Saving users inputs
// let allUsers = [];
// allUsers = JSON.parse(localStorage.getItem("allUsers"))
// **********************************************************
// Log Out

logOutBtn.addEventListener('click' , function(){
  localStorage.removeItem('userName');
})


