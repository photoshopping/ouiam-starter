var greeting = document.getElementById("greeting");
var d = new Date();
var time = d.getHours();

greeting.style.color = "white";
greeting.style.fontWeight = "bold";

if (time < 14) {
  greeting.innerHTML = "Bonjour!";
  console.log("bonjour");
}
if (time > 14) {
  greeting.innerHTML = "Bonsoir!";
  console.log("bonsoir");
}
