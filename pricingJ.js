const joinBut = document.getElementById('clickjoin');
joinBut.addEventListener("click", addEle);
const sec = document.getElementById('joinProgram');

val = 0;
function addEle() {
  if (val == 0) {
    const newElement = document.createElement("p");
    newElement.id = "successtext";
    newElement.innerHTML = "You have successfully joined!";
    newElement.style.color = "green";
    newElement.style.fontFamily = "Roboto, sans-serif";
    newElement.style.fontSize = "15px";
    sec.appendChild(newElement);
    val = 1;
  }
}