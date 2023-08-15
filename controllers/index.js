const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);

module.exports = router;
/* 
document.addEventListener("DOMContentLoaded", () => {
    const appElement = document.getElementById("app");
    const loginFormTemplate = Handlebars.compile(document.getElementById("loginFormTemplate").innerHTML);
    const signUpFormTemplate = Handlebars.compile(document.getElementById("signUpFormTemplate").innerHTML);

    appElement.innerHTML = loginFormTemplate();
    appElement.innerHTML += signUpFormTemplate();

    const loginForm = document.getElementById("loginForm");
    const signUpForm = document.getElementById("signUpForm");

    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const loginUsername = document.getElementById("loginUsername").value;
        const loginPassword = document.getElementById("loginPassword").value;

        // Perform login logic (e.g., send data to server)
    });

    signUpForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const signupUsername = document.getElementById("signupUsername").value;
        const signupPassword = document.getElementById("signupPassword").value;

        // Perform sign-up logic (e.g., send data to server)
    });
});*/
