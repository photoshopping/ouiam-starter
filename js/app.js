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

// Google Tag Manager

(function (w, d, s, l, i) {
  w[l] = w[l] || [];
  w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
  var f = d.getElementsByTagName(s)[0],
    j = d.createElement(s),
    dl = l != "dataLayer" ? "&l=" + l : "";
  j.async = true;
  j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
  f.parentNode.insertBefore(j, f);
})(window, document, "script", "dataLayer", "GTM-KH7LPK3");

//End Google Tag Manager
