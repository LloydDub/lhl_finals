const express = require("express");
const multer = require("multer");
const ejs = require("ejs");
const path = require("path");

// set storage
const storage = multer.diskStorage({
  destination: "./public/uploads/",
  filename: function (req, res, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originaname)
    );
  },
});

//intit upload
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

const port = 3000;

app.listen(port, () => console.log(`Server started on port ${port}`));
