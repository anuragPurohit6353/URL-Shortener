const user = require("../models/user");
async function handleUserSignUp(req,res) {

    const { name , email , password } = req.body;
    await user.create({
        name,
        email,
        password,
    });
        return res.render("/");
}

async function handleUserLogin(req,res) {

    const {email , password } = req.body;
   const newUser =   await user.findOne({email,password});
   if(!newUser) 
    return res.render("login",{
            error : " invalid passoword ! "
    })
        return res.redirect("/");
}
module.exports = {
    handleUserSignUp ,
    handleUserLogin,
}