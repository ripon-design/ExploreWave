// Welcome Message

window.onload = function () {

    alert("Welcome to ExploreWave Tourism - Newsletter Signup");

};

// Form Validation

function validateForm() {

    let firstName =
    document.getElementById("fname").value;

    let lastName =
    document.getElementById("lname").value;

    if (firstName.trim() === "") {

        alert("Please enter your First Name");

        return false;

    }

    if (lastName.trim() === "") {

        alert("Please enter your Last Name");

        return false;

    }

    // Success Message

    alert("Form Submitted Successfully!");

    return false;
}