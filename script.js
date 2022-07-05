// Math functions 
function add(num1, num2) {
  return (num1 + num2)
}

function subtract(num1, num2) {
  return (num1 - num2)
}

function multiply(num1, num2) {
  return (num1 * num2)
}

function divide(num1, num2) {
  return (num1 / num2)
}

// Operate functionm 
function operate(num1, num2, operator) {
  switch(operator) {
    case "+":
      return add(num1, num2)
    case "-":
      return subtract(num1, num2)
    case "*":
      return multiply(num1, num2)
    case "/":
      return divide(num1, num2)
    default:
      console.log("Invalid operator")
      break;
  }
}

num = operate(10,4, "-")

console.log(num)