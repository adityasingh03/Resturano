"use strict";
const locat = document.querySelector(".map");

locat.addEventListener("click", function () {});

navigator.geolocation.getCurrentPosition(
  function (position) {
    const { latitude } = position.coords;
    const { longitude } = position.coords;
    const map = L.map("map").setView([latitude, longitude], 16);

    L.tileLayer("https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);
    const arr = [latitude + 0.01, longitude - 0.01];
    L.marker([latitude, longitude])
      .addTo(map)
      .bindPopup(
        L.popup({
          autoclose: false,
          closeonclick: false,
          classname: "popup",
        })
      )
      .setPopupContent("Home")
      .openPopup();
    L.marker(arr)
      .addTo(map)
      .bindPopup(
        L.popup({
          autoclose: false,
          closeonclick: false,
          classname: "popup",
        })
      )
      .setPopupContent("Restraunt")
      .openPopup();
    map.on("click", function (eventmap) {
      const { lat, lng } = eventmap.latlng;
      console.log(lat, lng);
    });
  },
  function () {
    alert("please let us know ur location");
  }
);
