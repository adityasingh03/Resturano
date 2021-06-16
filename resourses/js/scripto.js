"use script";

let foodi = [
  "Pav Bhaji",
  "Burger",
  "Samosa",
  "Nacho and Dip",
  "Idli",
  "Pizza",
  "Veg Rolls",
  "Hot Dog",
  "Butter Chicken",
  "Chola",
  "Dal Fry",
  "Mix Veg Gravy",
  "Chicken Muglai",
  "Palak Panner",
  "Tikka Panner",
  "Shrimps",
  "Thali",
  "Thali Pro",
  "Thali Pro Max",
  "Non Veg Thali",
  "Roti",
  "Butter Roti",
  "Naan",
  "Missi",
  "Coffee",
  "Tea",
  "Water",
  "Cold Drinks",
  "Ice Cream Cone",
  "Gulab Jamun",
  "Cup Cake",
  "Ice Cream Stick",
];
let costi = [
  100, 60, 30, 120, 80, 250, 100, 60, 450, 150, 120, 140, 450, 180, 140, 440,
  250, 450, 550, 350, 10, 15, 20, 20, 50, 40, 25, 30, 50, 60, 40, 40,
];
let count = [];
for (let i = 0; i < costi.length; i++) count.push(1);
const addc = document.querySelectorAll(".btn");
addc[0].addEventListener("click", function () {
  count[0]++;
  f1();
});

addc[1].addEventListener("click", function () {
  count[1]++;
  f1();
});

addc[2].addEventListener("click", function () {
  count[2]++;
  f1();
});

addc[3].addEventListener("click", function () {
  count[3]++;
  f1();
  console.log(count);
});
console.log(count);
const cartin = document.querySelector(".carttext");
const brk = document.querySelectorAll(".brk");
const f1 = function () {
  brk.forEach(function (i1, j) {
    blur.innerHTML = "";
    const html = ` <div class="item">
  <img src="resourses/imgs/food/p1.png" class="imgfc" />
  <p> ${foodi[j]} </p>
  <p>Rs ${costi[j]}</p>
  <div>
    <img src="resourses/icon/add_circle_black_24dp.svg" />
    <p>${count[j]}</p>
    <img src="resourses/icon/remove_circle_black_24dp.svg" />
  </div>
  <p>Total:Rs ${costi[j] * count[j]}</p>
</div>`;
    if (count[j] > 0) cartin.insertAdjacentHTML("beforeend", html);
  });
};
//Cart Pop Up
document.querySelector(".cartimg").addEventListener("click", function () {
  if (document.querySelector(".cart").classList.contains("cartclick")) {
    document.querySelector(".cart").classList.remove("cartclick");
    document.querySelector(".cartimg").classList.remove("cartimgclick");
  } else {
    document.querySelector(".cart").classList.add("cartclick");
    document.querySelector(".cartimg").classList.add("cartimgclick");
  }
});
