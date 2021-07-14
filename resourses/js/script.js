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

    if (
      !e.target.classList.contains("linkh") &&
      !e.target.classList.contains("headlink")
    )
      return;
    const clickl = e.target.getAttribute("href");

    console.log();
    document.querySelector(clickl).scrollIntoView({ behavior: "smooth" });
    console.log(clickl);
  });
});
/*Providing faiding of ul*/
document.querySelectorAll(".ul2").forEach((ul) => {
  ul.addEventListener("click", function (e) {
    e.preventDefault();
    if (!e.target.classList.contains("linkh")) return;
    console.log(2);

    ul.style.display = "none";
  });
});

document.querySelector(".stickyul").addEventListener("mouseenter", function () {
  document.querySelector(".ul2").style.display = "block";
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

//scroll
/*
const f6 = function () {
  document.addEventListener("scroll", function () {
    document.querySelector("#h1-").scrollIntoView({ behavior: "smooth" });
  });
};
if (document.querySelector(".header").getBoundingClientRect().bottom > 100) {
  document.addEventListener("scroll", function (e) {
    e.preventDefault();
    document.querySelector("#h1-").scrollIntoView({ behavior: "auto" });
  });
}

document.querySelector("body").addEventListener("click", function () {
  let bound = document.querySelector(".header").getBoundingClientRect();
  console.log(bound);
});
*/
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
document.querySelector(".signb").addEventListener("click", function (e) {
  e.preventDefault();
  if (document.querySelector(".signu").value.toLowerCase() === "user1") {
    console.log(true);
    if (document.querySelector(".signp").value === "pass1") {
      document.querySelector(".sinout").classList.remove("hidden");
      document.querySelector(".sinin").classList.add("hidden");
      document.querySelector(".sininl").style.padding = "0";
      document.querySelector(".signu").value = "";
      document.querySelector(".signp").value = "";

      f2();
    } else {
      document.querySelector(".signp").value = "";
      document.querySelector(".signp").style.placeholder = "Incorrect Password";
      document.querySelector(".signp").style.backgroundColor = "#ffcccc";
    }
  } else {
    document.querySelector(".signu").value = "";
    document.querySelector(".signp").value = "";
    document.querySelector(".signu").style.backgroundColor = "#ffcccc";
  }
});

document.querySelector(".sinout").addEventListener("click", function (e) {
  e.preventDefault();
  document.querySelector(".sinin").classList.remove("hidden");
  document.querySelector(".sinout").classList.add("hidden");
  document.querySelector(".sininl").style.padding = "20px";
});

const arr = [
  {
    q1: "What is your name",
    q2: "What is your age",
  },
  {
    q1: "Would you likl eto order or reserve ?",
    q2: "what is your favouraite dish?",
  },
];

document.querySelector(".botimg").addEventListener("click", function (e) {
  e.preventDefault();
  document.querySelector(".chattxt").classList.toggle("hid");
});
document.querySelector(".botcross").addEventListener("click", function (e) {
  e.preventDefault();
  document.querySelector(".chattxt").classList.add("hid");
});
