var ema = 0;
var paswo = 0;
var chepas = 0;

function validation() {
    var form = document.getElementById("form");
    var email = document.getElementById("email").value;
    var count = document.getElementById("email").value.length;
    var text = document.getElementById("email_t");
    var empattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    /*email*/
    if (email.match(empattern) && count > 0) {
        form.classList.add("valid");
        text.innerHTML = "Your Email is valid"
        document.getElementById("acc").style.height = "37em";
        text.style.color = "#04b400";
        ema = 1;
    } else if (count > 0) {
        form.classList.remove("valid");
        form.classList.add("invalid");
        text.innerHTML = "Your email is invalid"
        document.getElementById("acc").style.height = "37em";
        text.style.color = "##ffa200"
        ema = 0;
    }
    else if (count == 0) {
        form.classList.remove("valid");
        form.classList.remove("invalid");
        text.innerHTML = "Please enter your email."

        document.getElementById("acc").style.height = "35em";
        text.style.color = "#ffa200"
        ema = 0;

    }
}
function CheckPassword() {
    var form = document.getElementById("form_t");
    var pas = document.getElementById("pass_1").value;
    var text = document.getElementById("pass_t");
    var count = document.getElementById("pass_1").value.length;
    var passw = /^[A-Za-z]\w{7,14}$/;

    /*password 1*/
    if (count > 7 && count <= 14) {
        form.classList.add("valid");
        form.classList.remove("invalid");
        text.innerHTML = "Your Password is valid"
        document.getElementById("acc").style.height = "39em";
        text.style.color = "#04b400";

    } else if (count > 0 && count < 8) {

        form.classList.remove("valid");
        form.classList.add("invalid");
        text.innerHTML = "Your Password is invalid ! Your password at least should have more than 7 character and max 14 character"
        document.getElementById("acc").style.height = "39em";
        text.style.color = "#ffa200";

    }
    else if (count == 0) {
        form.classList.remove("valid");
        form.classList.remove("invalid");
        text.innerHTML = "Please enter your password"

        document.getElementById("acc").style.height = "35em";
        text.style.color = "#ffa200"
    }
}
function ConfirmPas() {
    var form = document.getElementById("form_c");
    var pas = document.getElementById("pass_2").value;
    var text = document.getElementById("text_c");
    var passw = document.getElementById("pass_1").value;;

    /*password 2*/
    if (pas == passw) {
        // form.classList.add("valid");
        form.classList.remove("invalid");
        text.innerHTML = "Your Password is valid"
        document.getElementById("acc").style.height = "41em";
        text.style.color = "#04b400";
        chepas = 1;
    } else {
        form.classList.remove("valid");
        form.classList.add("invalid");
        text.innerHTML = "Your Password is not match!"
        document.getElementById("acc").style.height = "41em";
        text.style.color = "#ffa200"
        chepas = 0;
    }
    if (pas == "") {
        form.classList.remove("valid");
        form.classList.remove("invalid");
        text.innerHTML = "Please enter your password"
        document.getElementById("acc").style.height = "35em";
        text.style.color = "#ffa200"
        chepas = 0;
    }
}