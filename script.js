const mainBtn = document.querySelector("#btn");

mainBtn.addEventListener("click", simpleFun);
document.addEventListener("dblclick", bgfun);

function simpleFun() {
  alert("Hello.Its working.");
}

function bgfun() {
  alert("You are clicked the background.");
}
