document.getElementById('parking-form').addEventListener('submit', function (event) {
    event.preventDefault()
    validate()
    nameErrorMessage()
    dateOfParking()
    days()
    creditCard()
    CVV()
    expiration()
})

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
            } else {
                inputField.classList.add('input-valid')
                // console.log("green")
            }
        }  
      
    }
}

function nameErrorMessage(){
    var findName = document.getElementById('name-field')
        if (findName.classList.contains("input-invalid")){
            var createDiv = document.createElement('div')
            createDiv.classList.add('error-message')
            createDiv.innerText = "Name Field is Required"
            console.log('name message', createDiv)
            findName.appendChild(createDiv)
    }
}
function dateOfParking(){
    var findDate = document.getElementById('start-date-field')
    if (findDate.classList.contains('input-invalid')){
        var createDateDiv = document.createElement('div')
        createDateDiv.classList.add('error-message')
        createDateDiv.innerText = 'Date is Required'
        findDate.appendChild(createDateDiv)
    }
}

function days(){
    var daysOfParking = document.getElementById('days-field')
    if (daysOfParking.classList.contains('input-invalid')){
        var createDaysDiv = document.createElement('div')
        createDaysDiv.classList.add('error-message')
        createDaysDiv.innerText = 'How Many Days Will You Be Parking?'
        daysOfParking.appendChild(createDaysDiv)
    }
}

function creditCard(){
    var creditCardID = document.getElementById('credit-card-field')
    if (creditCardID.classList.contains('input-invalid')){
        var createCardDiv = document.createElement('div')
        createCardDiv.classList.add('error-message')
        createCardDiv.innerText = "You Must Enter A Credit Card Number"
        creditCardID.appendChild(createCardDiv)
    }
}

function CVV(){
    var cvvId = document.getElementById('cvv-field')
    if(cvvId.classList.contains('input-field')){
        var createCVVDiv = document.createElement('div')
        createCVVDiv.classList.add('error-message')
        createCVVDiv.innerText = "CVV Number Required"
        cvvId.appendChild(createCVVDiv)
    }
}

function expiration(){
    var expirationField = document.getElementById('expiration-field')
    if(expirationField.classList.contains('input-invalid')){
        var createExpirationDiv = document.createElement('div')
        createExpirationDiv.classList.add('error-message')
        createExpirationDiv.innerText = "Credit Card Expiration Required"
        expirationField.appendChild(createExpirationDiv)
    }
}