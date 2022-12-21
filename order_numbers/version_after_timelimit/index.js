function shuffleNums() {
  var array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  array.sort(() => Math.random() - 0.5);
  var i = 1;
  document.getElementById("numbers").innerHTML = "";
  while (i <= 9) {
    var color = "";
    if (array[i - 1] % 2 === 0) {
      color = "square2";
    }
    var numbers = document.getElementById("numbers").innerHTML;
    document.getElementById("numbers").innerHTML =
      numbers +
      "<div class='shuffle_sort--square " +
      color +
      "'><span class='square_1'>" +
      array[i - 1] +
      "</span></div>";
    i++;
  }
}
function sortNums() {
  var array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  var i = 1;
  document.getElementById("numbers").innerHTML = "";
  while (i <= 9) {
    var color = "";
    if (i % 2 === 0) {
      color = "square2";
    }
    var numbers = document.getElementById("numbers").innerHTML;
    document.getElementById("numbers").innerHTML =
      numbers +
      "<div class='shuffle_sort--square " +
      color +
      "'><span class='square_1'>" +
      array[i - 1] +
      "</span></div>";
    i++;
  }
}
