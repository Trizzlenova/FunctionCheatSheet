function add(a, b) {
  return a + b
}
function subtract(a, b) {
  return a - b
}
function multiply(a, b) {
  return a * b
}
function divide(a, b) {
  return a / b
}
function inc(n) {
  var result = 0;
  result += n + 1;
  return result
}
function dec(n) {
  var result = 0;
  result += n - 1;
  return result
}
function makeInt(n) {
  return parseInt(n, 10);
}
function preserveDecimal(n) {
  return parseFloat(n);
}

var funkyFunction = function() {
  return function() {
    return "FUNKY!"
  }
}
