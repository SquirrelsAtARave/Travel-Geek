const router = require('express').Router();
const Expense = require('../models/Expense.js');
const withAuth = require('../utils/auth.js');

//homepage route
router.get("/", async(req, res)=>{
    try{
      if(!req.session.logged_in){
        res.render("homepage")
        } else{
            res.redirect("/profile")
        }     
    }  
    catch(err) {
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
router.get("/profile", withAuth, async(req, res)=>{
    try{
        res.render("profile")

    }catch(err) {
        console.error(err)
    }
})

//itinerary router
router.get("/itinerary", withAuth, async(req, res)=>{
    try{
        res.render("itinerary")

    }catch(err) {
        console.error(err)
    }
})

//budget router
router.get("/budget", withAuth, async(req, res)=>{
    try{
        const expensesData = await Expense.findAll({
            where:{
                user_id:req.session.user_id
            }
        })
        const expenses = expensesData.map((expense)=>{
            return expense.get({plain: true })
        })
        console.log("expenses: ", expenses)
        res.render("budget",{expenses} )

    }catch(err) {
        console.error(err)
    }

})


module.exports = router;


