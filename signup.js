function login() {
    window.location.href = "movie.html";
}

function signup() {
    let form = document.getElementById("signup");
    var name = form.name.value;
    var email = form.email.value;
    var username = form.username.value;
    var number = form.number.value;
    var password = form.password.value;
    var repeatpassword = form.repeatpassword.value;

    let loginCredentials = {
        name,
        email,
        username,
        number,
        password,
        repeatpassword,
    };
    console.log(loginCredentials);
    if (
        name == "" ||
        email == "" ||
        username == "" ||
        password == "" ||
        repeatpassword == ""
    ) {
        alert("Empty Fields");
    } else if (password != repeatpassword) {
        alert("Password Not Matching");
    } else {
        let arr;
        arr = localStorage.getItem("login");
        if (arr == null) {
            arr = []; // for my first visit
        } else {
            arr = JSON.parse(localStorage.getItem("login"));
        }

        arr.push(loginCredentials);

        localStorage.setItem("login", JSON.stringify(arr));
        alert("Signup Succesful! Click on Signin");
        // window.location.href = "loginpage.html";
    }
}