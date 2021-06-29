"use strict";
const locat = document.querySelector(".map");

locat.addEventListener("click", function () {
  console.log(2);
});

navigator.geolocation.getCurrentPosition(
  function (position) {
    const { latitude } = position.coords;
    const { longitude } = position.coords;
    const map = L.map("map").setView([latitude, longitude], 16);

    L.tileLayer("https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    L.marker([latitude, longitude]).addTo(map).bindPopup("Home!!").openPopup();

    map.on("click", function (eventmap) {
      console.log(eventmap);
    });
  },
  function () {
    alert("please let us know ur location");
  }
);
