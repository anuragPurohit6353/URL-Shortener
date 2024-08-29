const express = require('express')
const mongoose = require('mongoose')
const ShortUrl = require('./models/shortUrl')
const app = express()
const userRoutes = require("./routes/user");
const user = require("./models/user");
const {handleUserSignUp , handleUserLogin} = require("./controllers/user");
const path = require("path");
const { v4 : uuidv4 } = require('uuid');
const { setUser , getUser } = require("./service/auth");
const cookieParase = require("cookie-parse");
mongoose.connect('mongodb://localhost/urlShortener', {
  
})
// app.use(cookieParase());
app.set('view engine', 'ejs');
app.set("views",path.join(__dirname,"views"));
app.use(express.urlencoded({ extended: false }))
app.use("/signup",userRoutes);
app.get('/', async (req, res) => {
  const shortUrls = await ShortUrl.find()
  res.render('index', { shortUrls })
});




app.get("/signup",(req,res) => {
  res.render("signup")
})
app.post("/signup",async (req,res) => {
  const { name , email , password } = req.body;
  await user.create({
      name,
      email,
      password,
  });
      return res.render("login");

});
app.post("/login",async (req,res) => {
  const {email , password } = req.body;
  const newUser =   await user.findOne({email,password});
  if(!newUser) 
   return res.render("login",{
           error : " invalid passoword ! "
   });
   const sessionId = uuidv4();
   setUser(sessionId,user);
   res.cookie('uid',sessionId);
       return res.redirect("/");
});
app.get("/login" , (req,res) => {
    res.render("login");
});
app.post('/shortUrls', async (req, res) => {
  await ShortUrl.create({ full: req.body.fullUrl })

  res.redirect('/')
})
// Main Logic : 
app.get('/:shortUrl', async (req, res) => {
  const shortUrl = await ShortUrl.findOne({ short: req.params.shortUrl })
  if (shortUrl == null) return res.sendStatus(404)

  shortUrl.clicks++
  shortUrl.save()

  res.redirect(shortUrl.full)
})

app.listen(5000);