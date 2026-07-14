const db = require("../database/db");

// 新規登録処理
const registerUser = (req, res) => {

    const { name, loginId, password } = req.body;

    // SQL
    const sql = `
        INSERT INTO users (name, login_id, password)
        VALUES (?, ?, ?)
    `;

    db.run(sql, [name, loginId, password], function(err) {

        if (err) {
            console.error(err.message);

            return res.status(500).json({
                message: "ユーザー登録失敗"
            });
        }

        res.status(200).json({
            message: "ユーザー登録成功"
        });

    });

};


// ログイン処理
const loginUser = (req, res) => {

    const { loginId, password } = req.body;

    const sql = `
        SELECT * FROM users
        WHERE login_id = ? AND password = ?
    `;

    db.get(sql, [loginId, password], (err, row) => {

        if (err) {

            console.error(err.message);

            return res.status(500).json({
                message: "ログイン失敗"
            });

        }

        // ユーザーが存在した場合
        if (row) {

            return res.status(200).json({
                message: "ログイン成功",
                name: row.name
            });

        }

        // ユーザーが存在しない場合
        return res.status(401).json({
            message: "IDまたはパスワードが違います"
        });

    });

};


module.exports = {
    registerUser,
    loginUser
};