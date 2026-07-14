// 共通ヘッダーを読み込む
fetch("../components/header.html")
    .then(response => response.text())
    .then(data => {

        document.getElementById("header").innerHTML = data;

        // ユーザー名表示
        const userName = localStorage.getItem("userName");
        console.log(userName);

        document.getElementById("userName").textContent =
            userName + " さん";


        // ログアウト処理
        const logoutButton = document.getElementById("logoutButton");

        logoutButton.addEventListener("click", () => {

            localStorage.removeItem("isLoggedIn");

            alert("ログアウトしました");

            window.location.href = "login.html";

        });

    });