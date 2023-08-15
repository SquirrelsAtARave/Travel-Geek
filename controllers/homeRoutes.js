const router = require('express').Router();

//homepage route
route.get("/", async(req, res)=>{
    try{
        res.render("homepage")

    }catch(err) {
        console.error(err)
    }
})

//login route
route.get("/login", async(req, res)=>{
    try{
        res.render("login")

    }catch(err) {
        console.error(err)
    }
})

//profile route
route.get("/profile", async(req, res)=>{
    try{
        res.render("profile")

    }catch(err) {
        console.error(err)
    }
})


module.exports = router;


