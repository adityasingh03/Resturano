"use script";

let foodi = ["chicken Muglai", "Burger", "Pizza", "Nachos"];
const addc = document.querySelectorAll(".btn");

addc[0].addEventListener("click", function () {
  console.log(foodi[0]);
});

addc[1].addEventListener("click", function () {
  console.log(foodi[1]);
});

addc[2].addEventListener("click", function () {
  console.log(foodi[2]);
});

addc[3].addEventListener("click", function () {
  console.log(foodi[3]);
});

document.querySelector(".cartimg").addEventListener("click", function () {
  if (document.querySelector(".cart").classList.contains("cartclick")) {
    document.querySelector(".cart").classList.remove("cartclick");
    document.querySelector(".cartimg").classList.remove("cartimgclick");
  } else {
    document.querySelector(".cart").classList.add("cartclick");
    document.querySelector(".cartimg").classList.add("cartimgclick");
  }
});
