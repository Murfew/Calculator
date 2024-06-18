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

function operate(a, b, operator) {
    switch (operator) {
        case "+":
            add(a, b)

        case "-":
            subtract(a, b)

        case "*":
            multiply(a, b)

        case "/":
            divide(a, b)

    }
}

const numberButtons = document.getElementsByClassName("number")
const operationButtons = document.getElementsByClassName("operation")
const equation = document.getElementById("equation")
const equal = document.getElementById("compute")

for (let i = 0; i < numberButtons.length; i++) {
    numberButtons[i].addEventListener("click", () => {
        let oldEquation = equation.value
        equation.value = oldEquation + numberButtons[i].textContent
    })
}

for (let i = 0; i < operationButtons.length; i++) {
    operationButtons[i].addEventListener("click", () => {
        let oldEquation = equation.value
        equation.value = oldEquation + " " + operationButtons[i].textContent + " "
    })
}


