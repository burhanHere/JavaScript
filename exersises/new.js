// function forBurhan()
// {
  var burhan = " burhan is my name.";
  var burhanLenght = burhan.length;
  var burhanReplace = burhan.replace("burhan", "ali");

// }
document.getElementById("burhan").innerHTML =
  burhan +
  " Length of used variable is " +
  burhanLenght +
  "<br>" +
  burhan.toUpperCase() +
  "<br>" +
  burhan.toLowerCase() +
  "<br>" +
  burhanReplace;