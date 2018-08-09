document.getElementById('parking-form').addEventListener('submit', function (event) {
    event.preventDefault()

    

    var name = document.getElementById('name').value.trim()

    if (name === '') {
        showEmptyFieldError()
        errorOnSubmit()
    } else {
        var createEmptyDiv = document.createElement('div')
        createEmptyDiv.classList.add('greeting')
        createEmptyDiv.innerText = 'Hello, ' + name

        var greetingParent = document.getElementById('name-field')
        greetingParent.appendChild(createEmptyDiv)
        appendChild.classList.add('name-message')

        clearError()
    }
})

function showEmptyFieldError(){
    var createChild = document.createElement('div')
    createChild.classList.add('error-message')
    createChild.innerText = 'Name is Required'

    var name = document.getElementById('name-field')
    name.appendChild(createChild)
    name.classList.add('error input-invalid')
}

function errorOnSubmit() {
    var noticeOfErrorOnSubmit = document.createElement('div')
    noticeOfErrorOnSubmit.classList.add('error-message')
    noticeOfErrorOnSubmit.innerText = 'You Are Missing Some Information'

    var name = document.getElementById('input-field')
    name.appendChild(createChild)
    appendChild.classList.add('error')
}
function clearError () {
    var field = document.getElementById('name')
    field.classList.remove('error')
  }