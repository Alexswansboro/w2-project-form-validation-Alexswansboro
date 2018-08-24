document.getElementById('parking-form').addEventListener('submit', function (event) {
    event.preventDefault()
    validate()
    // nameErrorMessage()
    // dateOfParking()
    // days()
    // creditCard()
    // CVV()
    // expiration()
    // car()
})
var maxCarYear = ((new Date()).getFullYear() + 1);
var today = new Date ()
var inputErrorMessages = {
    "name": "Missing Name",
    "car-year": "Car Year must be between 1900 and " + maxCarYear,
    "car-make": "Missing Car Make",
    "car-model": "Missing Car Model",
    "start-date": "Missing Start Date",
    "days": "Missing Days",
    "credit-card": "Missing Credit Card",
    "cvv": "Missing CVV",
    "expiration": "Missing Expiration",
}

function validate() {
    var inputFieldsArray = document.querySelectorAll('.input-field')
    for (var i = 0; i < inputFieldsArray.length; i++) {
        var inputField = inputFieldsArray[i]
        var inputsArray = inputField.querySelectorAll('input')
        for (var j = 0; j < inputsArray.length; j++) {
            var input = inputsArray[j]
            
            if (!inputPresenceValid(input)) {
                createErrorMessage(input, inputField)
            } else if (input.id === "car-year" && !validCarYear()) {
                createErrorMessage(input, inputField)
            } else if (parkingDateInput() < today) { 
                createErrorMessage(input, inputField)
            } else {
                removeErrorMessage(input)
            }

            if (inputField.id === "car-field") {
                if (validCarYear() && inputPresenceValid(input)){
                    makeInputFieldValid(inputField)
                } else {
                    makeInputFieldInvalid(inputField)
                }
            } else if (inputField.id === "start-date-field"){
                // console.log("date valid")
                if(parkingDateInput() > today){
                    makeInputFieldValid(inputField)
                } else {
                    console.log("input field invalid")
                    makeInputFieldInvalid(inputField)
                }
            } else {
                if (inputPresenceValid(input)) {
                    makeInputFieldValid(inputField)
                } else {
                    makeInputFieldInvalid(inputField)
                }
            }
        }
    }
}

function createErrorMessage(input, inputField){
    var errorMessageID = input.id + '-error-message'
    if (!document.getElementById(errorMessageID)){
        var createInputDiv = document.createElement('div')
        createInputDiv.id = errorMessageID
        var inputErrorMessage = inputErrorMessages[input.id]
        createInputDiv.innerText = inputErrorMessage
        inputField.appendChild(createInputDiv)
    }
}
function removeErrorMessage(input) {
    var errorMessageID = input.id + '-error-message'
    var errorMessage = document.getElementById(errorMessageID)
    if (!!errorMessage){
        errorMessage.remove()
    }
}
function makeInputFieldValid(inputField) {
    inputField.classList.add('input-valid')
    inputField.classList.remove('input-invalid')
}
function makeInputFieldInvalid(inputField) {
    inputField.classList.add('input-invalid')
    inputField.classList.remove('input-valid')
}

function inputPresenceValid(inputElm) {
    // var input = document.getElementById(inputId)
    return inputElm.value.trim() !== ""
}
function validCarYear() {
    var input = document.getElementById('car-year');
    var carYearValue = input.value
    // console.log('carYearValue', carYearValue);
    var carYearNumber = Number(carYearValue)
    // console.log('carYearNumber', carYearNumber);
    return (Number.isInteger(carYearNumber) && 1900 < carYearNumber && carYearNumber <= maxCarYear)
}
function parkingDateInput() {
    var parkingDateInput = document.getElementById('start-date').value
    return new Date(parkingDateInput)
}

function inputValue(inputId) {
    return document.getElementById(inputId).value
}


