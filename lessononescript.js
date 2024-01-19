const b1 = document.getElementById("colorBut");
const ex1 = document.getElementById("ex1");
b1.addEventListener("click", changeColor);
function changeColor() {
  ex1.style.color= "blue";
}

const b2 = document.getElementById("backBut");
const ex2 = document.getElementById("ex2");
b2.addEventListener("click", changeBack);
function changeBack() {
  ex2.style.backgroundColor= "red";
}

const b3 = document.getElementById("sizeBut");
const ex3 = document.getElementById("ex3");
b3.addEventListener("click", changeSize);
function changeSize() {
  ex3.style.fontSize= "30px";
}

const b4 = document.getElementById("fontBut");
const ex4 = document.getElementById("ex4");
b4.addEventListener("click", changeFont);
function changeFont() {
  ex4.style.fontFamily= "Lucida Handwriting";
}