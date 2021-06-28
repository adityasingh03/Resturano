"use strict";
const closebtn = document.querySelectorAll(".containh3img");
const signin = document.querySelectorAll(".sinin");
const overlay = document.querySelector(".overlay");

const login = document.querySelector(".login");
const register = document.querySelector(".register");
const forgot = document.querySelector(".forgot");
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

const f3 = function () {
  register.classList.add("activem");
  document.querySelector(".registerc").classList.remove("hidden");
  if (!login.classList.contains("hidden")) {
    login.classList.remove("activem");
    document.querySelector(".loginc").classList.add("hidden");
  }
  if (!forgot.classList.contains("hidden")) {
    forgot.classList.remove("activem");
    document.querySelector(".forgotc").classList.add("hidden");
  }
};
const f4 = function () {
  login.classList.add("activem");
  document.querySelector(".loginc").classList.remove("hidden");
  if (!register.classList.contains("hidden")) {
    register.classList.remove("activem");
    document.querySelector(".registerc").classList.add("hidden");
  }
  if (!forgot.classList.contains("hidden")) {
    forgot.classList.remove("activem");
    document.querySelector(".forgotc").classList.add("hidden");
  }
};
const f5 = function () {
  forgot.classList.add("activem");
  document.querySelector(".forgotc").classList.remove("hidden");
  if (!login.classList.contains("hidden")) {
    login.classList.remove("activem");
    document.querySelector(".loginc").classList.add("hidden");
  }
  if (!register.classList.contains("hidden")) {
    register.classList.remove("activem");
    document.querySelector(".registerc").classList.add("hidden");
  }
};
//Modal Window
signin.forEach((val) => val.addEventListener("click", f1));

overlay.addEventListener("click", f2);

for (let i = 0; i < 3; i++) closebtn[i].addEventListener("click", f2);

register.addEventListener("click", f3);
login.addEventListener("click", f4);
forgot.addEventListener("click", f5);

// smooth scrolling
document.querySelectorAll(".home").forEach((navbar) => {
  navbar.addEventListener("click", function (e) {
    e.preventDefault();
    console.log(e.target);

    if (
      !e.target.classList.contains("linkh") &&
      !e.target.classList.contains("headlink")
    )
      return;
    const clickl = e.target.getAttribute("href");
    document.querySelector(clickl).scrollIntoView({ behavior: "smooth" });
    console.log(clickl);
  });
});
//sticky nav
const entryf = function (entries, observe) {
  const [entry] = entries;
  if (!entry.isIntersecting)
    document.querySelector(".sticky").classList.remove("stickyhidden");
  else document.querySelector(".sticky").classList.add("stickyhidden");
};
const observer = new IntersectionObserver(entryf, {
  root: null,
  threshold: 0,
});
observer.observe(document.querySelector(".header"));
/*
const entryf2 = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove("section_up");
  entry.target.classList.add("section_on");
  observer.unobserve(entry.target);
};
const effectobserve = new IntersectionObserver(entryf2, {
  root: null,
  threshold: 0.3,
  rootMargin: "0px",
});
document.querySelectorAll("section").forEach((val) => {
  effectobserve.observe(val);
  val.classList.add("section_up");
});
*/
