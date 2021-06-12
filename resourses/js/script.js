"use strict";

//Modal Window
document.querySelector(".sinin").addEventListener("click", function () {
  document.querySelector(".modalp").classList.remove("modalph");
  document.querySelector(".modalp").classList.add("modalpb");
  console.log(1);
});

document.querySelector(".modalp").addEventListener("click", function () {
  document.querySelector(".modalp").classList.add("modalph");
  document.querySelector(".modalp").classList.remove("modalpb");
  console.log(1);
});
