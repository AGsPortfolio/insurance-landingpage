function myFunction() {
  var x = document.getElementById("navBar");
  if (x.className === "Nav-bar") {
    x.className += " responsive";
  } else {
    x.className = "Nav-bar";
  }
}