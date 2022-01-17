
let inputOne = document.getElementById('num1')
let inputTwo = document.getElementById('num2')

let getNumberInput = function(input) {
    let value = input.value
    let numValue = new Number(value)
    return numValue
}

let getNumbers = function() {
    let numberValue1 = getNumberInput(inputOne)
    let numberValue2 = getNumberInput(inputTwo)
    let result = {
        num1: numberValue1,
        num2: numberValue2        
    }
    return result
}

let onClickBtn = function(e) {
    let pressBtn = e.target
    let operationValue = pressBtn.value
    let numValues = getNumbers()
    let resultValue
    if (operationValue == '+') {
        resultValue = numValues.num1 + numValues.num2
    } else if (operationValue == '-') {
        resultValue = numValues.num1 - numValues.num2
    } else if (operationValue == '*') {
        resultValue = numValues.num1 * numValues.num2
    } else if (operationValue == '/') {
        resultValue = numValues.num1 / numValues.num2
    } 
    alert(resultValue)
}

let addEventBtn = function(id) {
    let idBtn = document.getElementById(id)
    idBtn.addEventListener('click', onClickBtn)
}

let addEventId = ['sum', 'minus', 'multiply', 'divide']
for (let i = 0; i < addEventId.length; i++) {
    addEventBtn(addEventId[i])
}
