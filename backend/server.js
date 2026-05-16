const express = require("express");
const cors = require("cors");
const path = require("path");
const db = require("./database/db");
const authRoutes = require("./routes/auth");

const app = express();
const PORT = 3000;

// JSONデータを受け取れるようにする
app.use(express.json());

// CORS許可
app.use(cors());

// frontendフォルダを公開
app.use(express.static(path.join(__dirname, "../frontend")));

// ログイン・新規登録用のルート設定を読み込む
app.use("/api/auth", authRoutes);

// トップページ表示
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/index.html"));
});

// サーバー起動
app.listen(PORT, () => {
    console.log(`サーバー起動中: http://localhost:${PORT}`);
});