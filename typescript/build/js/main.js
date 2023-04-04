"use strict";
let a = 'hello';
let b = a;
let c = a;
const addOrConcate = (a, b, c) => {
    if (c === 'add')
        return a + b;
    return "" + a + b;
};
let myVal = addOrConcate(12, 2, 'concat');
let anotherVal = addOrConcate(2, 2, "concat");
// the Dom
const img = document.querySelector('img');
const img1 = document.getElementById('#img');
img.src;
img1.src;
