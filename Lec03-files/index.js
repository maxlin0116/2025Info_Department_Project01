import express from "express";

//初始化 app 和 port
const app = express();
const port = 3000;

/*
------------ req 和 res ------------
req.params: 取得 URL 裡的參數，例如 /user/:id 裡的 id
req.query: 取得 URL 後的查詢字串，例如 /search?keyword=abc 裡的 keyword
req.body: 取得 POST 請求的內容，需要搭配 body-parser 使用

res.send(data): 傳送文字、HTML 或 json 回應(Express 會自動判斷內容類型)
res.json(data): 傳送 JSON 格式的回應
res.status(code): 設定回應的 HTTP 狀態碼(ex: 200, 404, 500)
res.sendFile(path): 傳送檔案作為回應(ex: HTML, 圖片)
------------------------------------

------------- Middleware -------------
在 req 和 res 之間執行的函式，可以用來處理請求、驗證、記錄等功能

app.use(bodyParser.json()): 將HTTP request 轉乘 json 形式
app.use(express.static("../frontend")): 提供靜態路徑
app.use(cors()): 啟用跨來源資源共享
--------------------------------------
*/

//建立路由 GET 和 POST
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/p", (req, res) => {
  res.send("post page");
});

//同一個 api 可能有兩種 method，所以我們用了 .route
app
  .route("/login")
  .get((req, res) => {
    res.send("login get");
  })
  .post((req, res) => {
    res.send("login post");
  });

//啟動 server
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});