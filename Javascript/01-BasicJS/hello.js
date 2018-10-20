// document.getElementById("btn").addEventListener("click", function(){

// });

window.addEventListener("load", initEvent);

function initEvent() {
    console.log("Init executed");
    document.getElementById("btn").addEventListener("click", show);
}

function show() {
    console.log("Show executed");
    var username = document.getElementById("box_1");
    // console.log(username.value);
    // document.getElementById("output").innerHTML += username.value;
    document.getElementById("output").innerHTML = username.value;
}