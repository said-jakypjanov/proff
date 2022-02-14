"use strict";

var clc = document.querySelector('.cancel');
var arrow = document.querySelector('.icon');
var backContent = document.querySelector('.back-content');
arrow.addEventListener("click", function () {
  arrow.classList.add("active_arr");

  if (backContent.classList.contains("off")) {
    backContent.classList.remove("off");
    backContent.classList.add("active");
  }
});
clc.addEventListener("click", function () {
  arrow.classList.remove("active_arr");

  if (backContent.classList.contains("active")) {
    backContent.classList.remove("active");
    backContent.classList.add("off");
  }
});