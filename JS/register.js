//form validation

//create account

let createAccount = () => {
    const alertBox = document.getElementById("alert-box");
    const alertBoxContent = document.querySelector("#alert-box p")
    const fullName = document.getElementById("fName").value;
    const email = document.getElementById("email").value;
    const phoneNumber = document.getElementById("phone").value;
    const password = document.getElementById("password").value;



    /*if (fullName.length < 11) {
        alert("An error occurred!. Please just enter one first name and one last name in the name field only");
        return false;
    }*/
    if (fullName) {
        var regName = /^[a-zA-Z]+ [a-zA-Z]+$/;
        var name = fullName;

        if (!regName.test(name)) {
            alertBox.style.display = "flex";
            alertBox.style.width = "30rem";
            alertBoxContent.textContent = "An error occurred!. Please just enter one first name and one last name in the name field only."
            setTimeout(hideAlert, 5000)
            function hideAlert() {
                alertBox.style.display = "none";
            }
            return false;
        }
    }

    if (!fullName || !email || !phoneNumber) {
        alertBox.style.display = "flex";
        alertBox.style.width = "15rem"
        alertBoxContent.textContent = "No Information"
        setTimeout(hideAlert, 5000)
        function hideAlert() {
            alertBox.style.display = "none";
        }
        return false;
    } else if (fullName) {

    }

    if (!password) {
        alertBox.style.display = "flex";
        alertBox.style.width = "30rem";
        alertBoxContent.textContent = "An error occurred trying to create your account, please check the fields and try again."
        setTimeout(hideAlert, 5000)
        function hideAlert() {
            alertBox.style.display = "none";
        }
        return false;
    }

    if (phoneNumber.length !== 11) {
        alertBox.style.display = "flex";
        alertBox.style.width = "30rem";
        alertBoxContent.textContent = "An error occurred!. Reason: This phone number is invalid(" + phoneNumber + "). Please make sure you input a single valid phone number."
        setTimeout(hideAlert, 5000)
        function hideAlert() {
            alertBox.style.display = "none";
        }
        return false;
    }
}

let alertBox = document.getElementById("alert-box");

let closeAlertBox = () => {
    alertBox.style.display = "none";
}

alertBox.addEventListener("click", closeAlertBox);


