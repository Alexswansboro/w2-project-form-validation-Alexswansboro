document.getElementById('parking-form').addEventListener('submit', function (event) {
    event.preventDefault()
    validate()
    nameErrorMessage()
    dateOfParking()
    days()
    creditCard()
    CVV()
    expiration()
    car()
})

var inputErrorMessages = {
    "name": "Missing",
    "car-year": "Missing Car Year",
    "car-make": "Missing Car Make",
    "car-model": "Missing Car Model",
    "start-date": "Missing",
    "days": "Missing",
    "credit-card": "Missing",
    "cvv": "Missing",
    "expiration": "Missing",
}

function validate() {
    var inputFieldsArray = document.querySelectorAll('.input-field')
    // console.log(inputFieldsArray)
    for (var i = 0; i < inputFieldsArray.length; i++) {
        var inputField = inputFieldsArray[i]
        // console.log("inputField", inputField)  
        var inputsArray = inputField.querySelectorAll('input')
        // console.log('inputsArray', inputsArray) 
        for (var j = 0; j < inputsArray.length; j++) {
            var input = inputsArray[j]
            // console.log('input', input)
            if (input.value.trim() === "") {
                inputField.classList.add('input-invalid')
                // console.log("red")
                // console.log("input", input)
                // console.log("input.id", input.id)
                // var createInputDiv = document.createElement('div')
                // createInputDiv.classList.add('error-message')
                // var inputErrorMessage = inputErrorMessages[input.id]
                // createInputDiv.innerText = inputErrorMessage
                // inputField.appendChild(createInputDiv)
            } else {
                inputField.classList.add('input-valid')
                // console.log("green")
            }
        }

    }
}

function nameErrorMessage() {
    var findName = document.getElementById('name-field')
    if (findName.classList.contains("input-invalid")) {
        var createDiv = document.createElement('div')
        createDiv.classList.add('error-message')
        createDiv.innerText = "Name Field is Required"
        console.log('name message', createDiv)
        findName.appendChild(createDiv)
    }
}

function dateOfParking() {
    var findDate = document.getElementById('start-date-field')
    if (findDate.classList.contains('input-invalid')) {
        var createDateDiv = document.createElement('div')
        createDateDiv.classList.add('error-message')
        createDateDiv.innerText = 'Date is Required'
        findDate.appendChild(createDateDiv)
    }
}

function days() {
    var daysOfParking = document.getElementById('days-field')
    if (daysOfParking.classList.contains('input-invalid')) {
        var createDaysDiv = document.createElement('div')
        createDaysDiv.classList.add('error-message')
        createDaysDiv.innerText = 'How Many Days Will You Be Parking?'
        daysOfParking.appendChild(createDaysDiv)
    }
}

function creditCard() {
    var creditCardID = document.getElementById('credit-card-field')
    if (creditCardID.classList.contains('input-invalid')) {
        var createCardDiv = document.createElement('div')
        createCardDiv.classList.add('error-message')
        createCardDiv.innerText = "You Must Enter A Credit Card Number"
        creditCardID.appendChild(createCardDiv)
    }
}

function CVV() {
    var cvvId = document.getElementById('cvv-field')
    if (cvvId.classList.contains('input-invalid')) {
        var createCVVDiv = document.createElement('div')
        createCVVDiv.classList.add('error-message')
        createCVVDiv.innerText = "CVV Number Required"
        cvvId.appendChild(createCVVDiv)
    }
}

function expiration() {
    var expirationField = document.getElementById('expiration-field')
    if (expirationField.classList.contains('input-invalid')) {
        var createExpirationDiv = document.createElement('div')
        createExpirationDiv.classList.add('error-message')
        // var inputErrorMessage = inputErrorMessages[input.id]
        var inputErrorMessage = "Credit Card Expiration Required"
        createExpirationDiv.innerText = inputErrorMessage;
        expirationField.appendChild(createExpirationDiv)
    }
}

function car() {
    var carFieldElement = document.getElementById('car-field')
    var inputsArray = carFieldElement.querySelectorAll('input')
    console.log('inputsArray', inputsArray) 
    for (var j = 0; j < inputsArray.length; j++) {
        var input = inputsArray[j]
        if (carFieldElement.classList.contains('input-invalid')) {
            console.log("input", input)
            console.log("input.id", input.id)
            var createInputDiv = document.createElement('div')
            createInputDiv.classList.add('error-message')
            createInputDiv.id = input.id + '-error-message'
            var inputErrorMessage = inputErrorMessages[input.id]
            createInputDiv.innerText = inputErrorMessage
            carFieldElement.appendChild(createInputDiv)
        }
    }
}

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