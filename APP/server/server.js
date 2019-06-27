let express=require("express");
let fs=require("fs");
let app=express();
let bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.listen(8080,() => {
  console.log("app is running")
})

app.get("/",(req,res) => {
  res.send(9);
})

//json数据
app.get("/goods", (req, res) => {
  fs.readFile("../json/goods.json", "UTF-8", (err, data) => {
    if (data) {
      res.send(JSON.parse(data));
    } else {
      console.log(err);
    }
  })
})
//json数据
app.get("/ratings", (req, res) => {
  fs.readFile("../json/ratings.json", "UTF-8", (err, data) => {
    if (data) {
      res.send(JSON.parse(data));
    } else {
      console.log(err);
    }
  })
})
//json数据
app.get("/seller", (req, res) => {
  fs.readFile("../json/seller.json", "UTF-8", (err, data) => {
    if (data) {
      res.send(JSON.parse(data));
    } else {
      console.log(err);
    }
  })
})