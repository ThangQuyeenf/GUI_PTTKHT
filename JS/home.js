var x = document.getElementById("stu_and_teach");
var y = document.getElementById("department");
var z = document.getElementById("btn");
var ha = 6;
function stu_and_teach(){
    x.style.left = "50px";
    y.style.left = "550px";
    z.style.left = "0";
}

function department(){
    x.style.left = "-500px";
    y.style.left = "50px";
    z.style.left = "180px";
}

function toggle(){
    var blur = document.getElementById("blur");
    blur.classList.toggle('active');
}