//
// function clearErrors() {
//     for (var loopCounter = 0;
//         loopCounter < document.forms["numberInputs"].elements.length;
//         loopCounter++) {
//         if (document.forms["numberInputs"].elements[loopCounter]
//            .parentElement.className.indexOf("has-") != -1) {
//
//             document.forms["numberInputs"].elements[loopCounter]
//                .parentElement.className = "form-group";
//         }
//     }
// }

// function resetForm() {
//     clearErrors();
//     document.forms["numberInputs"]["num1"].value = "";
//     document.forms["numberInputs"]["num2"].value = "";
//     document.forms["numberInputs"]["step"].value = "";
// }

function numItems() {
  var num1 = document.getElementById("num1").value;
  var num2 = document.getElementById("num2").value;
  var step = document.getElementById("step").value;
  var counter = 0;
  var evenArray = new Array();

  for (var i = Number(num1); i <= Number(num2); i = i + Number(step)) {
    if (i % 2 == 0) {
      evenArray[counter] = i;
      counter = counter + 1;
    }
  }

document.getElementById("numInfo").style.display = "block";
document.getElementById("firstNum").innerText = num1;
document.getElementById("secondNum").innerText = num2;
document.getElementById("stepNum").innerText = step;
document.getElementById("evenNums").innerText = evenArray;
return false;
}
