document.getElementById("changeTexte").addEventListener("click", function () {
  document.querySelector("p").innerText = "un clic a été detecté";
});
document.getElementById("changeColor").addEventListener("click", function () {
  document.querySelector("p").classList.toggle("changeColor");
});
let x = document.getElementById("changer");
x.addEventListener("click", function () {
  x.innerHTML = "un clic a été detecté";
  x.style.backgroundColor = "blue";
});
