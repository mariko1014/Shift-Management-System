const sqlite3 = require("sqlite3").verbose();
const path = require("path");

// DBファイルの場所
const dbPath = path.join(__dirname, "shift-management.db");

// DB接続
const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error("データベース接続エラー:", err.message);
    } else {
        console.log("SQLiteデータベース接続成功");

        // usersテーブル作成
        db.run(`
            CREATE TABLE IF NOT EXISTS users (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT NOT NULL,
                login_id TEXT NOT NULL UNIQUE,
                password TEXT NOT NULL
            )
        `);
    }
});

module.exports = db;