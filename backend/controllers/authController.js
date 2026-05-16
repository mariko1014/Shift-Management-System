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

module.exports = {
    registerUser
};