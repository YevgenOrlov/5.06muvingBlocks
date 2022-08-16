let w = 60; //ширина блока увеличивается
function blwi() {
  w++;
  document.querySelector(".out-1").style.width = w + "px";
}
document.querySelector(".out-1").addEventListener("mousemove", blwi);

console.log(w);
