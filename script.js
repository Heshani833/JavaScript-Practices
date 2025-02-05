function addNumbers() {
  let firNum = Number(document.getElementById("fNum").value);
  let secNum = Number(document.getElementById("sNum").value);
  let answer = firNum + secNum;
  document.getElementById("finalAnswer").innerHTML = "Answer is: " + answer;
}
