import express from "express"; //express framework를 사용하기 위해 import 했다.
import morgan from "morgan"; // debugging을 위해 morgan을 임포트 했다.
import mongoose from "mongoose";
import Lecture from "./models/Lecture";
import Snack from "./models/Snack";
import path from "path";

// 192.168.219.115/admin

const PORT = 7000; // 웹서버 실행 포트를 7000번으로 실행하기 위해 미리 상수 PORT에 7000을 저장

const app = express();
app.use(morgan(`dav`));
app.set("view engine", "pug");
app.use(express.static(path.join(__dirname, "/assets")));

mongoose.connect(`mongodb://4leaf:fourleaf0309@192.168.219.115:27017/admin`, {
    dbName: `EDU_1`,
    useNewUrlParser: true,
    useCreateIndex: true,
}, 
(error) => {
  if (error) {
    console.log("Failed To DB Connect");
  } else {
    console.log("CUNNECT TO DB!");
  }
 }
);

app.get("/", async(req, res) => {
    console.log("CALLED BY USER!");

    const result = await Lecture.find({}, {});

    return res.render("home", { LectureList: result });
});

app.get("/snack", async(req, res) => {
  const result = await Snack.find({},{});

  console.log(result);
});

app.get("/lecture", async(req, res) => {
  const result = await Lecture.find({}, {});

  res.render("lecture", { dataList: result });
});

app.listen(PORT, () => {
    console.log(`${PORT} SERVER START!`);
});
