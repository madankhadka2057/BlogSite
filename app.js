const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const app = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static("public"));
const { blogs } = require("./model/index");

app.get("/", async (req, res) => {
  const getBlog = await blogs.findAll();
  res.render("blog",{allBlog:getBlog});
});
app.get("/createblog", async (req, res) => {
  res.render("createBlog");
});
app.post("/createblog", async (req, res) => {
  const { title, author, description, category } = req.body;
  await blogs.create({
    title,
    author,
    description,
    category,
  });
  res.redirect("/");
});
app.get("/singleBlog/:id", async (req, res) => {
    console.log(req.params)
    const id=req.params.id;
    console.log("Id is :",id)
    const singleData=await blogs.findAll({
      where:{
        id
      }
    })

    res.render("singleBlog",{data:singleData});
  });
  app.get('/updateBlog/:id',(req,res)=>{
    console.log(req.params)
    const id=req.params.id;
    res.render('updateBlog',{id:id})
  })
  app.post('/updateBlog/:id',async(req,res)=>{
    // console.log(req.params)
    const {title,author,description,category}=req.body;
    await blogs.update({
        title,
        author,
        description,
        category
    },{
      where:{
        id:id
      }
    })
    res.redirect("/")
  })
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
