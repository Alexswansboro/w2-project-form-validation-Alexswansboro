document.getElementById('parking-form').addEventListener('submit', function (event) {
    event.preventDefault()

    function validate(){
        var inputFieldsArray = document.querySelectorAll('.input-field')
        // console.log(inputFieldsArray)
        for(var i = 0; i < inputFieldsArray.length; i++){
            var inputField = inputFieldsArray[i]
            // console.log("inputField", inputField)  
            var inputsArray = inputField.querySelectorAll('input')
            // console.log('inputsArray', inputsArray) 
            for(var j = 0; j < inputsArray.length; j++){
                var input = inputsArray[j]
                // console.log('input', input)
                if(input.value.trim() === ""){
                    inputField.classList.add('input-invalid')
                    console.log("red")
                }else{
                    inputField.classList.add('input-valid')
                    console.log("green")
                }
            }
        }
    }
    function listenForSubmit(){
        var submitButton = document.getElementById('submit-button')
        submitButton.addEventListener("click", validate())
    }
    listenForSubmit()
})