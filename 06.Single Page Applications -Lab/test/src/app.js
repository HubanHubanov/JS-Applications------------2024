import {add, product, subtract} from "./util.js"

// import * as util from "./util.js"
// const res = util.add(1,1);
// const res2 = util.subtract(10, 50);
// const res3 = util.product(6,6)
// console.log(res, res2, res3);

const result = add(5,3);
const result2 = subtract(100, 50);
const result3 = product(5,5);
console.log(result, result2, result3);

const h1 = document.querySelector("h1");
h1.textContent += " Dynamic content."
h1.textContent += " New test."

