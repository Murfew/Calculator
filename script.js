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
            return add(a, b)

        case "-":
            return subtract(a, b)

        case "*":
            return multiply(a, b)

        case "/":
            return divide(a, b)

    }
}


//TODO Add decimal functionality
//TODO Add CSS styles to look better
//TODO Add backspace button
//TODO Add keyboard support

const numberButtons = document.getElementsByClassName("number")
const operationButtons = document.getElementsByClassName("operation")
const equation = document.getElementById("equation")
const equal = document.getElementById("compute")
const clear = document.getElementById("clear")

for (let i = 0; i < numberButtons.length; i++) {
    numberButtons[i].addEventListener("click", () => {
        let oldEquation = equation.value
        equation.value = oldEquation + numberButtons[i].textContent

        for (let j = 0; j < operationButtons.length; j++) {
            operationButtons[j].disabled = false
        }
    })
}

for (let i = 0; i < operationButtons.length; i++) {
    operationButtons[i].addEventListener("click", () => {
        let oldEquation = equation.value
        equation.value = oldEquation + " " + operationButtons[i].textContent + " "

        for (let j = 0; j < operationButtons.length; j++) {
            operationButtons[j].disabled = true
        }
    })
}

clear.addEventListener("click", () => {
    equation.value = ""
})

equal.addEventListener("click", () => {
    //TODO Add order of operations
    //TODO Check if equation is valid


    let fullEquation = equation.value
    let equationElements = fullEquation.split(" ")
    let term1 = equationElements[0]
    let term2 = equationElements[2]
    let operator = equationElements[1]

    if (operator == "/" && term2 == 0) {
        equation.value = ""
        alert("You can't divide by zero!")
        return
    }

    equationElements.splice(equationElements.indexOf(operator), 1)
    equationElements.splice(equationElements.indexOf(term2), 1)
    equationElements.splice(equationElements.indexOf(term1), 1)

    console.log(equationElements)
    console.log(term1, term2, operator)
    console.log(operate(Number(term1), Number(term2), operator))

    equationElements.unshift(+operate(Number(term1), Number(term2), operator).toFixed(8))

    equation.value = equationElements.join(" ")

})

