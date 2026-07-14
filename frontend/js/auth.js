const registerButton = document.getElementById("registerButton");
const loginButton = document.getElementById("loginButton");

if (registerButton) {

    registerButton.addEventListener("click", async () => {

        const name = document.getElementById("name").value;
        const loginId = document.getElementById("loginId").value;
        const password = document.getElementById("password").value;

        try {

            const response = await fetch("/api/auth/register", {

                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    name,
                    loginId,
                    password
                })

            });

            const data = await response.json();
            

            alert(data.message);

        } catch (error) {

            console.error("通信エラー:", error);

            alert("通信エラーが発生しました");

        }

    });

}


if (loginButton) {
    loginButton.addEventListener("click", async () => {

        // 入力値取得
        const loginId = document.getElementById("loginId").value;
        const password = document.getElementById("password").value;

        try {
            const response = await fetch("/api/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    loginId,
                    password
                })
            });

            const data = await response.json();
            console.log(data);

            // 成功
            if (response.ok) {
                alert(data.message);

                // ログイン状態保持
                localStorage.setItem("isLogin", "true");

                // ユーザー名を保存
                localStorage.setItem("userName", data.name);    

                // メイン画面へ遷移
                window.location.href = "dashboard.html";
            }

            // 失敗
            else {
                alert(data.message);
            }

        } catch (error) {
            console.error("ログインエラー:", error);
            alert("サーバー接続に失敗しました");
        }
    });
}

