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
                creatErrorMessage(input, inputField)
            } else if (input.id === "car-year" && !validCarYear()) {
                creatErrorMessage(input, inputField)
            } else {
                removeErrorMessage(input)
            }

            if (inputField.id === "car-field") {
                if (validCarYear() && inputPresenceValid(input)){
                    makeInputFieldValid(inputField)
                } else {
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
function creatErrorMessage(input, inputField){
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

// function validate() {
//     var inputFieldsArray = document.querySelectorAll('.input-field')
//     for (var i = 0; i < inputFieldsArray.length; i++) {
//         var inputField = inputFieldsArray[i]
//         var inputsArray = inputField.querySelectorAll('input')
//         for (var j = 0; j < inputsArray.length; j++) {
//             var input = inputsArray[j]
//             if (input.value.trim() === "") {
//                 inputField.classList.add('input-invalid')
//                 inputField.classList.remove('input-valid')
//                 var createInputDiv = document.createElement('div')
//                 createInputDiv.classList.add('error-message')
//                 var inputErrorMessage = inputErrorMessages[input.id]
//                 createInputDiv.innerText = inputErrorMessage
//                 inputField.appendChild(createInputDiv)
//             } else {
//                 inputField.classList.add('input-valid')
//                 inputField.classList.remove('input-invalid')
//             }
//             if (input.id === "car-year") {
//                 if (!validCarYear()){
//                     inputField.classList.add('input-invalid')
//                     inputField.classList.remove('input-valid')
//                     var createInputDiv = document.createElement('div')
//                     createInputDiv.classList.add('error-message')
//                     var inputErrorMessage = inputErrorMessages[input.id]
//                     createInputDiv.innerText = inputErrorMessage
//                     inputField.appendChild(createInputDiv)
//                 } else {
//                     inputField.classList.add('input-valid')
//                     inputField.classList.remove('input-invalid')
//                 }
//             }
//         }
//     }
// }

function validCarYear() {
    var input = document.getElementById('car-year');
    var carYearValue = input.value
    // console.log('carYearValue', carYearValue);
    var carYearNumber = Number(carYearValue)
    // console.log('carYearNumber', carYearNumber);
    return (Number.isInteger(carYearNumber) && 1900 < carYearNumber && carYearNumber <= maxCarYear)
}

// function nameErrorMessage() {
//     var findName = document.getElementById('name-field')
//     if (findName.classList.contains("input-invalid")) {
//         var createDiv = document.createElement('div')
//         createDiv.classList.add('error-message')
//         createDiv.innerText = "Name Field is Required"
//         console.log('name message', createDiv)
//         findName.appendChild(createDiv)
//     }
// }

// function dateOfParking() {
//     var findDate = document.getElementById('start-date-field')
//     if (findDate.classList.contains('input-invalid')) {
//         var createDateDiv = document.createElement('div')
//         createDateDiv.classList.add('error-message')
//         createDateDiv.innerText = 'Date is Required'
//         findDate.appendChild(createDateDiv)
//     }
// }

// function days() {
//     var daysOfParking = document.getElementById('days-field')
//     if (daysOfParking.classList.contains('input-invalid')) {
//         var createDaysDiv = document.createElement('div')
//         createDaysDiv.classList.add('error-message')
//         createDaysDiv.innerText = 'How Many Days Will You Be Parking?'
//         daysOfParking.appendChild(createDaysDiv)
//     }
// }

// function creditCard() {
//     var creditCardID = document.getElementById('credit-card-field')
//     if (creditCardID.classList.contains('input-invalid')) {
//         var createCardDiv = document.createElement('div')
//         createCardDiv.classList.add('error-message')
//         createCardDiv.innerText = "You Must Enter A Credit Card Number"
//         creditCardID.appendChild(createCardDiv)
//     }
// }

// function CVV() {
//     var cvvId = document.getElementById('cvv-field')
//     if (cvvId.classList.contains('input-invalid')) {
//         var createCVVDiv = document.createElement('div')
//         createCVVDiv.classList.add('error-message')
//         createCVVDiv.innerText = "CVV Number Required"
//         cvvId.appendChild(createCVVDiv)
//     }
// }

// function expiration() {
//     var expirationField = document.getElementById('expiration-field')
//     if (expirationField.classList.contains('input-invalid')) {
//         var createExpirationDiv = document.createElement('div')
//         createExpirationDiv.classList.add('error-message')
//         // var inputErrorMessage = inputErrorMessages[input.id]
//         var inputErrorMessage = "Credit Card Expiration Required"
//         createExpirationDiv.innerText = inputErrorMessage;
//         expirationField.appendChild(createExpirationDiv)
//     }
// }

// function car() {
//     var carFieldElement = document.getElementById('car-field')
//     var inputsArray = carFieldElement.querySelectorAll('input')
//     console.log('inputsArray', inputsArray) 
//     for (var j = 0; j < inputsArray.length; j++) {
//         var input = inputsArray[j]
//         if (carFieldElement.classList.contains('input-invalid')) {
//             console.log("input", input)
//             console.log("input.id", input.id)
//             var createInputDiv = document.createElement('div')
//             createInputDiv.classList.add('error-message')
//             createInputDiv.id = input.id + '-error-message'
//             var inputErrorMessage = inputErrorMessages[input.id]
//             createInputDiv.innerText = inputErrorMessage
//             carFieldElement.appendChild(createInputDiv)
//         }
//     }
// }

// ldslkdfsjkdfskjldfslkdfslksdfalk

// function car() {
//     var carFieldElement = document.getElementById('car-field')
//     var inputsArray = carFieldElement.querySelectorAll('input')
//     console.log('inputsArray', inputsArray) 
//     for (var j = 0; j < inputsArray.length; j++) {
//         var input = inputsArray[j]
//         if (input.value.trim() === '') {
//             console.log("input", input)
//             console.log("input.id", input.id)
//             var createInputDiv = document.createElement('div')
//             createInputDiv.classList.add('error-message')
//             createInputDiv.id = input.id + '-error-message'
//             var inputErrorMessage = inputErrorMessages[input.id]
//             createInputDiv.innerText = inputErrorMessage
//             carFieldElement.appendChild(createInputDiv)
//         }
//     }
// }