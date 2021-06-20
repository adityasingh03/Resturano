"use script";

let foodi = [
  "Pav Bhaji",
  "Burger",
  "Samosa",
  "Nacho and Dip",
  "Idli",
  "Pizza",
  "Veg Rolls",
  "Veg Noodles",
  "Chole",
  "Dal Fry",
  "Mix Veg Gravy",
  "Palak Panner",
  "Panner Tikka",
  "Butter Chicken",
  "Chicken Muglai",
  "Biryani",
  "Thali",
  "Thali Pro",
  "Thali Pro Max",
  "Non Veg Thali",
  "Roti",
  "Butter Roti",
  "Naan",
  "Kulcha",
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
  100, 60, 30, 120, 80, 250, 100, 80, 140, 120, 140, 160, 150, 400, 450, 200,
  250, 400, 550, 350, 10, 15, 20, 25, 50, 30, 25, 45, 50, 60, 40, 40,
];
let count = [];
const f2 = function () {
  cartin.innerHTML = "";
  f1();
};
for (let i = 0; i < costi.length; i++) count.push(0);
const addc = document.querySelectorAll(".btn");
const addarr1 = document.querySelectorAll(".additem");
console.log(addarr1);
addc[0].addEventListener("click", function () {
  count[0]++;
  f2();
});

addc[1].addEventListener("click", function () {
  count[1]++;
  f2();
});

addc[2].addEventListener("click", function () {
  count[2]++;
});

addc[3].addEventListener("click", function () {
  count[3]++;
  cartin.innerHTML = "";
  f1();
});

addc[4].addEventListener("click", function () {
  count[4]++;
  f2();
});

addc[5].addEventListener("click", function () {
  count[5]++;
  f2();
});

addc[6].addEventListener("click", function () {
  count[6]++;
  f2();
});

addc[7].addEventListener("click", function () {
  count[7]++;
  f2();
});

addc[8].addEventListener("click", function () {
  count[8]++;
  f2();
});

addc[9].addEventListener("click", function () {
  count[9]++;
  f2();
});

addc[10].addEventListener("click", function () {
  count[10]++;
  f2();
});

addc[11].addEventListener("click", function () {
  count[11]++;
  f2();
});

addc[12].addEventListener("click", function () {
  count[12]++;
  f2();
});

addc[13].addEventListener("click", function () {
  count[13]++;
  f2();
});

addc[14].addEventListener("click", function () {
  count[14]++;
  f2();
});

addc[15].addEventListener("click", function () {
  count[15]++;
  f2();
});

addc[16].addEventListener("click", function () {
  count[16]++;
  f2();
});

addc[17].addEventListener("click", function () {
  count[17]++;
  f2();
});

addc[18].addEventListener("click", function () {
  count[18]++;
  f2();
});

addc[19].addEventListener("click", function () {
  count[19]++;
  f2();
});

addc[20].addEventListener("click", function () {
  count[20]++;
  f2();
});

addc[21].addEventListener("click", function () {
  count[21]++;
  f2();
});

addc[22].addEventListener("click", function () {
  count[22]++;
  f2();
});

addc[23].addEventListener("click", function () {
  count[23]++;
  f2();
});

addc[24].addEventListener("click", function () {
  count[24]++;
  f2();
});

addc[25].addEventListener("click", function () {
  count[25]++;
  f2();
});

addc[26].addEventListener("click", function () {
  count[26]++;
  f2();
});

addc[27].addEventListener("click", function () {
  count[27]++;
  f2();
});

addc[28].addEventListener("click", function () {
  count[28]++;
  f2();
});

addc[29].addEventListener("click", function () {
  count[29]++;
  f2();
});

addc[30].addEventListener("click", function () {
  count[30]++;
  f2();
});

addc[31].addEventListener("click", function () {
  count[31]++;
  f2();
});
let c3;
if (c3 >= 1) {
  const addarr = document.querySelectorAll(".additem");
  addarr[0].addEventListener("click", function () {
    console.log(1);
    let newc = document.querySelectorAll(".number");
    let newc1 = newc[0].textContent;
    newc[0].textContent = Number(newc1) + 1;
  });

  const remarr = document.querySelector(".removeitem");
  remarr.addEventListener("click", function () {
    let newc = document.querySelector(".number").textContent;
    newc > 0
      ? (document.querySelector(".number").textContent = Number(newc) - 1)
      : (document.querySelector(".number").textContent = 0);
  });
}
const cartin = document.querySelector(".carttext");
const brk = document.querySelectorAll(".brk");
const f1 = function () {
  brk.forEach(function (i1, j) {
    c3++;
    const html = ` <div class="item">
  <img src="resourses/imgs/food/p${j}.png" class="imgfc" />
  <p> ${foodi[j]} </p>
  <p>Rs ${costi[j]}</p>
  <div>
    <img src="resourses/icon/add_circle_black_24dp.svg" class="additem"/>
    <p class="number">${count[j]}</p>
    <img src="resourses/icon/remove_circle_black_24dp.svg" class="removeitem"/>
  </div>
  <p> Rs ${costi[j] * count[j]}</p>
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
