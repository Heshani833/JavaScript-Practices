function validation() {
  let phone = document.getElementById("num").value;

  let numLength = phone.length;
  let firstNums = phone.substr(0, 2);
  let lastNums = phone.substr(numLength - 9, 9);
  let num;

  if (phone.length < 9) {
    alert("Numbers missing please check again.");
    document.getElementById("msg").innerHTML = "Invalid Number";
  } else if (phone.length == 9) {
    alert("Number validation sucessful.");
    num = "94" + phone;
    document.getElementById("msg").innerHTML = num;
  } else if (phone.length == 10) {
    num = "94" + lastNums;
    document.getElementById("msg").innerHTML = num;
  }
}
