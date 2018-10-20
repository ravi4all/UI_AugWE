window.addEventListener("load", initEvents);

function initEvents() {
    num_buttons = document.getElementsByClassName("num");
    for (var i = 0; i < num_buttons.length; i++) {
        num_buttons[i].addEventListener("click", insertValue);
    }

    opr_buttons = document.getElementsByClassName("opr");
    for (var i = 0; i < opr_buttons.length; i++) {
        opr_buttons[i].addEventListener("click", insertOpr);
    }
}

function insertValue() {
    var value = event.srcElement.innerHTML;
    document.getElementById("box").value += value;
}

function insertOpr() {
    var opr = event.srcElement.innerHTML;
    var textBox = document.getElementById("box").value;
    var lastPos = textBox.charAt(textBox.length - 1);
    // textBox = opr;
    for (var i = 0; i < opr_buttons.length; i++) {
        if (opr_buttons[i].innerHTML == lastPos) {
            console.log("Inside If");
            textBox = textBox.replace(textBox.charAt(textBox.length - 1), opr);
            break
        } else {
            document.getElementById("box").value += opr;
            console.log("Inside Else");
            break
        }
    }
    // console.log(textBox);
}