"use strict";
const closebtn = document.querySelector(".containh3img");
const signin = document.querySelector(".sinin");
const overlay = document.querySelector(".overlay");

//functions
const f1 = function (e) {
  e.preventDefault();
  document.querySelector(".modalp").classList.remove("modalph");
  document.querySelector(".modalp").classList.add("modalpb");
};

const f2 = function () {
  document.querySelector(".modalp").classList.add("modalph");
  document.querySelector(".modalp").classList.remove("modalpb");
};
//Modal Window
signin.addEventListener("click", f1);

overlay.addEventListener("click", f2);

closebtn.addEventListener("click", f2);
