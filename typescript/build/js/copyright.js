"use strict";
let yearElement = document.getElementById('year');
const year = new Date().getFullYear().toString();
if (yearElement) {
    yearElement.setAttribute('datetime', year);
    yearElement.textContent = year;
}
