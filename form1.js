function FormValidation() {
    let username = document.getElementById('uname');
    let password = document.getElementById('password') let userErr = document.getElementById('userErr');
    let passErr = document.getElementById('passErr');
    let email = document.getElementById('email');
    let emailErr = document.getElementById('emailErr');
    let flag = 1;
    if (username.value === "") {
        userErr.innerHTML = "username is empty";
        userErr.style.color = "red";
        username.style.border = "1px solid red";
        flag = 0
    } else if (username.value.length < 5 || username.value.length >= 14) {
        userErr.innerHTML = "username must include b/w 6 to 14 characters";
        flag = 0
    } else {
        userErr.innerHTML = "";
        username.style.border = "1px solid gray";
        flag = 1
    }
    if (password.value === "") {
        passErr.innerHTML = "Password is empty";
        password.style.border = "1px solid red";
        flag = 0
    } else {
        passErr.innerHTML = "";
        password.style.border = "1px solid gray";
        flag = 1
    }
    if (email.value === "") {
        emailErr.innerHTML = "email is empty";
        emailErr.style.color = "red";
        email.style.border = "1px solid red";
        flag = 0
    } else if (email.value.indexOf('@') <= 0) {
        emailErr.innerHTML = "Invalid Position of @";
        emailErr.style.color = "red";
        flag = 0;
    } else if (email.value.charAt(email.value.length - 4) != '.') {
        emailErr.innerHTML = "invalid Email format ";
        emailErr.style.color = "red";
        flag = 0;
    } else {
        emailErr.innerHTML = "";
        email.style.border = "1px solid gray";
        flag = 1
    }
    // email validation
    //flag
    if (flag) {
        return true;
    } else {
        return false;
    }
}