var greeting = document.getElementById("greeting");
var d = new Date();
var time = d.getHours();

if (time < 14) {
  greeting.innerHTML = "Bonjour!";
  console.log("bonjour");
}
if (time > 14) {
  greeting.innerHTML = "Bonsoir!";
  console.log("bonsoir");
}
