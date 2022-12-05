const inputName = document.querySelector("#name")
const inputEmail = document.querySelector("#email")
const inputMessage = document.querySelector("#message")
const submitBtn = document.querySelector("#submit")
const errorMsg = document.querySelector("#error-msg")

submitBtn.addEventListener("click", function(event){

    event.preventDefault()

    if (inputName.value == "") {

        errorMsg.innerHTML = "Indtast venligst dit navn"

    } else if (inputEmail.value == "") {

        errorMsg.innerHTML = "Indtast venligst din email"

    } else if (inputMessage.value == "") {

        errorMsg.innerHTML = "Skriv venlist en besked i tekstfeltet"

    } else {

        window.location.reload();
        //email bliver sendt til host og siden bliver reloaded
    }

})