let Username = document.getElementById('uname')
let Password = document.getElementById('pass')
let Email = document.getElementById('email')

function formValidation() {
    // while (Username.value === "" || Password.value === "" || Email.value === "") {
    var flag = 1;
    if (Username.value === "") {
        document.getElementById('userErr').innerHTML = '**Enter your Name'
        Username.style.border = "1px solid red"
        flag = 0;
    } else if (Username.value.length < 5 || Username.value.length > 15) {
        document.getElementById('userErr').innerHTML = '**Name should be between 4 to 15 characters'
        Username.style.border = "1px solid red"
        flag = 0;
    } else {
        document.getElementById('userErr').innerHTML = ""
        Username.style.border = "1px solid gray"
        flag = 1;
    }
    if (Password.value === "") {
        document.getElementById('passErr').innerHTML = '**Enter your Password'
        Password.style.border = "1px solid red"
        flag = 0;
    } else if (Password.value.length < 4 || Password.value.length > 15) {
        document.getElementById('passErr').innerHTML = '**Wrong Password'
        Password.style.border = "1px solid red"
        flag = 0;
    } else {
        document.getElementById('passErr').innerHTML = ""
        Password.style.border = "1px solid gray"
        flag = 1;
    }
    if (Email.value === "") {
        document.getElementById('emailErr').innerHTML = '**Enter your Email'
        Email.style.border = "1px solid red"
        flag = 0;
    } else if (Email.value.indexOf('@') <= 0) {
        document.getElementById('emailErr').innerHTML = '**Invalid Email'
        Email.style.border = "1px solid red"
        flag = 0;
    } else if (Email.value.charAt(Email.value.length - 4) != '.') {
        document.getElementById('emailErr').innerHTML = '**Invalid Email Format'
        Email.style.border = "1px solid red"
        flag = 0;
    } else {
        document.getElementById('emailErr').innerHTML = ""
        Email.style.border = "1px solid gray"
        flag = 1;
    }

    // else {
    //     document.getElementById('userErr').innerHTML = '';
    //     document.getElementById('userErr').innerHTML = '';
    //     document.getElementById('userErr').innerHTML = '';
    //     return true;
    // }
    if (flag) {
        return true;
    } {
        return false;
    }

}