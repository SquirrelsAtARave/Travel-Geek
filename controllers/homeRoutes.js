const router = require('express').Router();

//homepage route
router.get("/", async(req, res)=>{
    try{
        res.render("homepage")

    }catch(err) {
        console.error(err)
    }
})

//login router
router.get("/login", async(req, res)=>{
    try{
        res.render("login")

    }catch(err) {
        console.error(err)
    }
})

//profile router
router.get("/profile", async(req, res)=>{
    try{
        res.render("profile")

    }catch(err) {
        console.error(err)
    }
})

//itinerary router
router.get("/itinerary", async(req, res)=>{
    try{
        res.render("itinerary")

    }catch(err) {
        console.error(err)
    }
})

//budget router
router.get("/budget", async(req, res)=>{
    try{
        res.render("budget")

    }catch(err) {
        console.error(err)
    }
})


module.exports = router;


