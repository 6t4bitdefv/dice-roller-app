document.getElementById("myButton").onclick = function () {
  const myCheckBox = document.getElementById("myCheckBox");
  if (myCheckBox.checked) {
    alert("You are subscribed.");
  } else {
    alert("You are NOT subscribed.");
  }
};
