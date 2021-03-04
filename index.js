import express from "express";
import fs from "fs";

const app = express();

app.use("/static", express.static("./static/"));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "content-type, x-access-token"); //1
  next();
});

app.get("/", (req, res) => {
  fs.readFile("./index.html", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    }
  });
});

app.listen(3000, () => {
  console.log("Server Starting...", 3000);
});
