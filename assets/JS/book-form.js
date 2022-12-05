const inputName = document.querySelector("#name")
const inputNumber = document.querySelector("#number")
const inputHoursFrom = document.querySelector("#hours-from")
const inputHoursTo = document.querySelector("#hours-to")
const inputEmail = document.querySelector("#email")
const inputPhone = document.querySelector("#phone")
const submitBtn = document.querySelector("#submit-btn")
const errorMsg = document.querySelector("#error-message")

submitBtn.addEventListener("click", function(event){

    event.preventDefault()

    if (inputName.value == "") {

        errorMsg.innerHTML = "Indtast venligst dit navn"

    } else if (inputNumber.value == "") {

        errorMsg.innerHTML = "Indtast venligst hvor mange personer I bliver"

    } else if (inputHoursFrom.value == "") {

        errorMsg.innerHTML = "Indtast venligst hvilken tidsperiode I/du vil booke"

    } else if (inputHoursTo.value == "") {

        errorMsg.innerHTML = "Indtast venligst hvilken tidsperiode I/du vil booke"

    } else if (inputPhone.value == "") {

        errorMsg.innerHTML = "Indtast venligst dit telefon nummer"

    } else {

        window.location.reload();
        //email bliver sendt til host og siden bliver reloaded
    }

})