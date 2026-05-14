const registerButton = document.getElementById("registerButton");

if (registerButton) {

    registerButton.addEventListener("click", () => {

        const name = document.getElementById("name").value;
        const loginId = document.getElementById("loginId").value;
        const password = document.getElementById("password").value;

        console.log("氏名:", name);
        console.log("ログインID:", loginId);
        console.log("パスワード:", password);

        alert("入力取得成功！");
    });

}