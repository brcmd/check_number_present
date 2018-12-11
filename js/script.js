var numList = [1, 2, 3, 5, 8, 13, 21, 34, 55, 89]
var num = parseInt(prompt("Writer a number"));
var found = false;

for (var i = 0; i < numList.length; i++) {
  if (num == numList[i]) {
    alert("Your number is on the list");
    found = true;
    break;
  }
}

if (found == false) {
  alert("Your number is not on the list");
}
