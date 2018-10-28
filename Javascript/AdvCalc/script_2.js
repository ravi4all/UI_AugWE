window.addEventListener("load", initEvents);

function initEvents() {
    var buttonLength = 0;
    var div = document.querySelector("#calc");
    var operators = document.querySelector("#operators");
    for (var i = 9; i >= buttonLength; i--) {
        var button = document.createElement("button");
        button.innerHTML = i;
        button.className = "num";
        div.appendChild(button);
        button.addEventListener("click", insertValue);
    }

    var operations = ['+', '-', '/', '*'];
    for (var i = 0; i < 4; i++) {
        var button = document.createElement("button");
        button.innerHTML = operations[i];
        button.className = "opr";
        operators.appendChild(button);
        button.addEventListener("click", appendOpeartion);
    }

    var btn = document.createElement("button");
    btn.innerHTML = "=";
    btn.className = 'opr';
    operators.appendChild(btn);
    btn.addEventListener("click", calc);

}

function insertValue() {
    var value = event.srcElement.innerHTML;
    document.getElementById("box").value += value;
}

function appendOpeartion() {
    document.getElementById("box").value += event.srcElement.innerHTML;
}

function calc() {
    var expression = document.getElementById("box").value;
    document.getElementById("box").value = eval(expression);
}