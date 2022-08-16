// function randomInteger(min, max) {
//   let rand = min + Math.random() * (max + 1 - min);
//   return Math.floor(rand);
// }

// console.log(randomInteger(0, 100));

// let s1 = 0;
// function moneyRecursion() {
//   let m = randomInteger(0, 100);
//   console.log("add :" + m);
//   s1 += m;
//   console.log("sum :" + s1);
//   if (s1 >= 30000) return;
//   moneyRecursion();
// }

// // moneyRecursion();
// console.log("sum :" + s1);

// function moneyCycle() {
//   let s2 = 0;
//   for (let i = 0; true; i++) {
//     let m = randomInteger(0, 100);
//     console.log("add1 :" + m);
//     s2 += m;
//     console.log("sum1 :" + s2);
//     if (s2 >= 30000) return;
//   }
// }
// moneyCycle();

// function moneyCycle2() {
//   let s2 = 0;
//   while (true) {
//     let m = randomInteger(0, 100);
//     console.log("add2 :" + m);
//     s2 += m;
//     console.log("sum2 :" + s2);
//     if (s2 >= 30000) return;
//   }
// }
// moneyCycle2();

// // let wigth = 0;  ширина блока увеличивается
// document.querySelector(".out-1").addEventListener("click", function () {
//   for (let i = 0; i < 400; i++) {
//     styly.wigth++;
//     if (wigth > 400) return;
//     this.style.left = wigth + "px";
//   }
// });
//  факториалы
// function fackt1(n) {
//   let s = 1;
//   for (let i = 1; i <= n; i++) {
//     s = s * i;
//   }
//   console.log(s);
// }

// fackt1(5);

// let s = 1;
// function fackt2(n) {
//   if (n === 0) return;
//   s = s * n;
//   fackt2(n - 1);
// }

// fackt2(5);
// console.log(s);

let w = 60; //ширина блока увеличивается
function blwi() {
  w++;
  document.querySelector(".out-1").style.width = w + "px";
}
document.querySelector(".out-1").addEventListener("mousemove", blwi);

console.log(w);
