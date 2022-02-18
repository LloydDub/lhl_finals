const express = require("express");
const multer = require("multer");
const ejs = require("ejs");
const path = require("path");

// set storage
const storage = multer.diskStorage({
  destination: "./public/upload/",
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

//intit upload     .array to take in multiple images, need to change this
const upload = multer({
  storage: storage,
}).single("myImage");

//init app
const app = express();

//ejs
app.set("view engine", "ejs");

//public folder
app.use(express.static("./public"));

app.get("/", (req, res) => res.render("index"));

//destination of uploads, change to input to match art engine?
app.post("/upload", (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      res.render("index", { msg: error });
    } else {
      console.log(req.file);
      res.send;
    }
  });
});

const port = 3000;

app.listen(port, () => console.log(`Server started on port ${port}`));
