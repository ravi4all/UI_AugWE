window.addEventListener("load", initEvents);

var username;
var usermail;
var userpwd;
var confpwd;
var span = document.getElementsByTagName("span");

function initEvents() {
    username = document.querySelector("#username");
    usermail = document.querySelector("#usermail");
    userpwd = document.querySelector("#userpwd");
    confpwd = document.querySelector("#confpwd");

    username.addEventListener("blur", checkBlank);
    usermail.addEventListener("keyup", validateEmail);
    document.querySelector("#form").addEventListener("submit", redirect);

}

function checkBlank() {
    var str = username.value;
    // if (str == "") {
    //     span[0].innerHTML = "Please fill this field";
    //     username.style.border = "1px solid red";
    // } else {
    //     span[0].innerHTML = "";
    //     username.style.border = "1px solid green";
    // }

    if (isEmpty(str)) {
        span[0].innerHTML = "Please fill this field";
        username.style.border = "1px solid red";
    } else {
        span[0].innerHTML = "";
        username.style.border = "1px solid green";
    }
}

function isEmpty(str) {
    return (str == undefined || str == "" || str.length == 0) ? true : false;
}

function validateEmail() {
    var str = usermail.value;
    var pattern = /([a-z | 0-9]\w+[@]+[a-z]\w+[.]+[a-z]{1,3}?)/
    var flag = pattern.test(str)
    if (flag) {
        span[1].innerHTML = "Valid";
    } else {
        span[1].innerHTML = "Invalid";
    }
}

function redirect() {
    event.preventDefault();
}