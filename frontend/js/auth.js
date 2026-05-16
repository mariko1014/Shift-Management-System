const registerButton = document.getElementById("registerButton");

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