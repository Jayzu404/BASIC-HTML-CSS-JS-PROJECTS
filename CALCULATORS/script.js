const display = document.getElementById("display");

function calc(input){
  result = eval(input);
  display.value = result;
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}