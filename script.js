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

const displayButtons = document.getElementsByClassName("display")
const equation = document.getElementById("equation")

for (let i = 0; i < displayButtons.length; i++) {
    displayButtons[i].addEventListener("click", () => {
        let oldEquation = equation.value
        equation.value = oldEquation + displayButtons[i].textContent
    })
}
