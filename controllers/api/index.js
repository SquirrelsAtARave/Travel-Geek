const router = require('express').Router();
const itineraryRoutes = require("./itineraryRoutes.js");
const userRoutes = require("./userRoutes.js")
const budgetRoutes = require("./budgetRoutes.js")
const expenseRoutes = require("./expenseRoutes.js")

router.use("/itinerary", itineraryRoutes) 
router.use("/users", userRoutes)
router.use("/budget", budgetRoutes)
router.use("/expense", expenseRoutes)
module.exports = router;

