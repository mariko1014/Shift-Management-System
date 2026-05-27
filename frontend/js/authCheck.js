const isLogin = localStorage.getItem("isLogin");

if (isLogin !== "true") {
    alert("このページを利用するにはログインしてください。");
    window.location.href = "login.html";
}