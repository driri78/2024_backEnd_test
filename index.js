const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs").promises;
const fsExit = require("fs");
const logEvents = require("./middleware/logEvents");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

/* 포트 설정 */
app.set("port", process.env.PORT || 3000);

app.use(cors());
/* 공통 미들웨어 */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  console.log(Date.now(), req.method, req.url);
  logEvents(`${req.method}, ${req.url}`);
  next();
});

app.get("/", (req, res) => {
  const str = `
  <h1>root</h1>
  GET: localhost:4500/makeup <br/>
  GET: localhost:4500/makeup/:id <br/>
  GET: localhost:4500/board <br/>
  POST: localhost:4500/board <br/>
  DELETE: localhost:4500/board/:id <br/>
  PUT: localhost:4500/board/:id <br/>
  `;
  res.send(str);
});

app.use("/users", require("./routes/users"));
app.use("/board", require("./routes/board"));
app.use("/makeup", require("./routes/makeup"));

// 필요한 데이터로 변경하여 사용
// app.get("/user", (req, res) => {
//   res.send("user");
// });

// 그외의 라우트 처리
app.use("/*", (req, res) => {
  res.status(500).send("404");
});

app.use((err, req, res, next) => {
  console.error(err.message);
  res.send("잠시 후 다시 접속해주세요");
});

app.listen(app.get("port"), () => {
  console.log(app.get("port"), "번 포트에서 서버 실행 중 ..");
});
