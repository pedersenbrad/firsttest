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
  var num8 = document.getElementById("num1").value;
  var num9 = document.getElementById("num2").value;
  var step0 = document.getElementById("step").value;
  var counter = 0;
  var evenArray = new Array();


  for (var i = num8; i == num9; i++) {
    if (i%2 == 0) {
      evenArray[counter] = i;
      counter = counter + 1;
      console.log(counter);
    }
  }
document.getElementById("numInfo").style.display = "block";
document.getElementById("firstNum").innerText = num8;
document.getElementById("secondNum").innerText = num9;
document.getElementById("stepNum").innerText = step0;
document.getElementById("evenNums").innerText = evenArray;
return false;
}
