window.addEventListener("load", initEvents);

var f_num;
var s_num;

function initEvents() {
    f_num = document.getElementById("num_1");
    s_num = document.getElementById("num_2");

    buttons = document.getElementsByTagName("button");
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", calc);
    }
}

function calc() {
    var opr = event.srcElement.innerHTML;
    // console.log(elem);
    var expression = f_num.value + opr + s_num.value;
    console.log(expression);
    // expression = '12' + '+' + '15' => '12 + 15'
    var result = eval(expression);
    document.getElementById("result").innerHTML = result
}