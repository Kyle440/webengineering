let currentResult = '';

function appendNumber(number) {
    document.getElementById("result").value += number;
}

function appendOperator(operator) {
    document.getElementById("result").value += operator;
}

function calculate() {

    var expression = document.getElementById("result").value;
    var result;

    if (expression.includes("+")) {
      result = add(expression);
    } else if (expression.includes("-")) {
      result = subtract(expression);
    } else if (expression.includes("*")) {
      result = multiply(expression);
    } else if (expression.includes("/")) {
      result = divide(expression);
    } else {
      result = "Ungültiger Ausdruck";
    }

    document.getElementById("result").value = result;
  }

  function add(expression) {
    var operands = expression.split("+");
    var operand1 = parseFloat(operands[0]);
    var operand2 = parseFloat(operands[1]);
    return operand1 + operand2;
  }

  function subtract(expression) {
    var operands = expression.split("-");
    var operand1 = parseFloat(operands[0]);
    var operand2 = parseFloat(operands[1]);
    return operand1 - operand2;
  }

  function multiply(expression) {
    var operands = expression.split("*");
    var operand1 = parseFloat(operands[0]);
    var operand2 = parseFloat(operands[1]);
    return operand1 * operand2;
  }

  function divide(expression) {
    var operands = expression.split("/");
    var operand1 = parseFloat(operands[0]);
    var operand2 = parseFloat(operands[1]);
    if (operand2 !== 0) {
      return operand1 / operand2;
    } else {
      return "Division durch 0 ist nicht erlaubt!";
    }
}

function clearResult() {
    document.getElementById("result").value = "";
}