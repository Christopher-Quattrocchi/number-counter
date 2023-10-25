//UI Logic
window.addEventListener("load", function () {
  document.querySelector("form#counter").addEventListener("submit", handleFormSubmission);
});

function showOutput(outputContent) {
  const output = document.getElementById("output");
  pEle = document.createElement("p");
  document.querySelector("div#output").innerHTML = "";
  pEle.append(outputContent);
  output.append(pEle);
}

function handleFormSubmission(event) {
  event.preventDefault();
  const maxNumber = parseInt(document.getElementById("number").value);
  const increment = parseInt(document.getElementById("increment").value);
  const result = counter(maxNumber, increment);
  showOutput(result);
}

//Business Logic
function counter(maxNumber, increment){
  let array = [];
  if ((maxNumber <= 0 || increment <= 0) || (maxNumber < increment)) {
    return ("Must be a number greater than 0 and Max Number must be greater than Increment");
    // return;
  } else {
    for (let i = 0; i < maxNumber; i += increment) {
      array.push(" " + i);
    }
    return array;
  }
}