"use strict";

//Modal Window
document.querySelector(".sinin").addEventListener("click", function () {
  document.querySelector(".modalp").classList.remove("modalph");
  document.querySelector(".modalp").classList.add("modalpb");
});

document.querySelector(".overlay").addEventListener("click", function () {
  document.querySelector(".modalp").classList.add("modalph");
  document.querySelector(".modalp").classList.remove("modalpb");
});

document.querySelector(".overlay").addEventListener("keydown", function (e) {
  console.log(e.key);
  document.querySelector(".modalp").classList.add("modalph");
  document.querySelector(".modalp").classList.remove("modalpb");
  console.log(1);
});
