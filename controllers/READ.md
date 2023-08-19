

<!-- STILL TODO -Alicia Hermez 5:32 PM
-get user’s budget to display on page load (budget page). this is almost done
-allow user to change their budget
-allow user to add or remove expenses(this one will likely require the most work)
-display budget after expenses
-optional: itinerary page
-READ.md -->

# Project Title:
Travel-Geek

# Description:
Hybrid-Tracker is a web application for in-office attendance tracking and planning and is equipped with a clickable month’s calendar, federal holiday API feed, and a weather report API for the current and following four days. The user clicks on weekdays worked in-office, to which the application responds by updating the calculation of both number of days worked in-office, and the percentage thereof.  Hybrid-Tracker utilizes the user’s local storage in order that when the page is reloaded, it will display the most recent updates made to the user’s record.

# Authentication: 
User authentication is implemented using express-session and cookies. This ensures secure access to the application's features and resources.

# Environment Variables
Sensitive information, including API keys and database credentials, are stored as environment variables for security. Set up a .env file in the root directory with the following variables:
- DB_HOST=your-database-host
- DB_USER=your-database-username
- DB_PASS=your-database-password
- SESSION_SECRET=your-session-secret

# Technology Used:
HTML, CSS and JavaScript, Node.js, Express.js, Used Handlebars.js, MySQL, Swquelize ORM, GET & POST routes, Event Linteners, Created a RESTful API, and deployed in Heroku.

The project follows the MVC (Model-View-Controller) paradigm for a structured organization:
- controllers/: Contains route handlers and business logic.
- models/: Defines Sequelize models and schema.
views/: Handlebars.js templates for the UI.
public/: Static assets (CSS, images, etc.).
routes/: Express.js route definitions.
config/: Configuration files.
middlewares/: Custom middleware functions.
db/: Database-related files (migrations, seeders).

# Acceptance Criteria

  - ## User Story
   

  - ## Scenario: 
   

  - ## To Use: 
  To run this project locally, follow these steps:

- Clone the repository: git clone 
- Install dependencies: npm install
- Set up your environment variables
- Initialize the database: npm run db:migrate
- Start the server: npm start

  - ## If:
    <!-- Hovering over the date, then the box will turn orange.
  The date is clicked on, then the box will turn to yellow after the click action.  The day will be counted toward days in office and percentage.
  If scrolled down the page to view upcoming holiday(s), the holiday API will provide all holiday(s) in the month.
  If input the city or zip code, the weather API will provide the 5 days weather forecast.
  If clicked on the weekends and holiday(s), the box color and counts will remain the same. -->

 
  - ## Variable Initialization:
   
 

  - ## Event Listeners:
    The code attaches a click event listener to the daysEl element, capturing the clicked day and updating its state accordingly.
    When a day is clicked, the code modifies its state and appearance, updates the daysInOffice count, and recalculates the office percentage.
    The setStorage function is called to save the updated storedDays array to the local storage.

  # Deployment
The application is deployed using Heroku, including the necessary environment variables for secure deployment.

# Screen Shot Images
<!-- images\CalendarScreenshot.jpeg
<figure>
  <img src="images\Screenshot (348).png" alt="Screenshot of Calendar" style="width:100%">
  </figure>
images\Tracker-Weather-Screenshot.jpg
<figure>
  <img src="images\Screenshot (346).png" alt="Screenshot of Weather Forecast" style="width:100%">
</figure> -->


# Tech Framework used:
<!-- Bulma - An open-source CSS framework that provides a set of responsive, mobile-first CSS styles and components. 
https://bulma.io/documentation/overview/start/ -->


# Reference Links:
[OpenWeather] <a href="">Open Weather</a>
[nager.date] <a href="">Federal Holidays</a>

# Project Reference
[project page] <a href="https://ahermez.github.io/hybrid-tracker-project-1/">Hybrid Attendance Tracker</a>
[GitHub page] <a href="https://github.com/ahermez/hybrid-tracker-project-1.git">Github Page</a>

# Sources
[Stack Overflow] <a href=https://stackoverflow.com/questions/7827838/how-can-i-find-the-number-of-business-days-in-the-current-month-with-javascript#:~:text=So[…]tivity%20on>

# Authors:
- Alicia Hermez
- Laurel Kidd
- Laetitia (Audrey) Kacoutie Veh
- Oksana Tak
- Tina Huang
- Vinita Navani














