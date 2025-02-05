function main() {
  alert("Welcome");
}
setTimeout(main, 50000);

function color() {
  document.getElementById("changeColor").style.color = "red";
}

setTimeout(color, 5000);
