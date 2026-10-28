//alert("테스트");
const css = document.querySelector("h3");
//h3은 빈 글자
const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
//getElementById("id")
const body = document.getElementById("gradient");
function setcolor() {
  //alert("색을바꿈!");
  body.style.background = `linear-gradient(to right,${color1.value}, ${color2.value})`;
  css.textContent = body.style.bacground + ";";
}
color1.addEventListener("change", setcolor);
color2.addEventListener("change", setcolor);
//주석달기
