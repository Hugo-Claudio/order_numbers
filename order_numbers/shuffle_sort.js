function shuffleNums() {
  var array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  array.sort(() => Math.random() - 0.5);
  var i = 1;
  while (i <= 9) {
    document.getElementsByClassName("square_" + i)[0].innerHTML = array[i - 1];

    i++;
  }
}
function sortNums() {
  var array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  var i = 1;
  while (i <= 9) {
    document.getElementsByClassName("square_" + i)[0].innerHTML = array[i - 1];

    i++;
  }
}
