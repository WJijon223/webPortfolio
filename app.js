"use strict";
import Typed from "/node_modules/typed.js/dist/typed.module.js";

const options = {
  strings: [
    "Computer Science Student",
    "Aspiring Developer",
    "Technology Enthusiast",
  ],
  typeSpeed: 30, //typing speed in ms
  backSpeed: 30, //deletion speed in ms
  backDelay: 1350, //delay before deleting in ms
  loop: true, //keep the animation looping
  showCursor: false,
};

var typed = new Typed("#typing-text", options);
