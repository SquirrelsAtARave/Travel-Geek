const router = require('express').Router();
const { User } = require('../../models');

router.get('/', async (req,res) =>{
  console.log("in get");
  console.log("session: ", req.session.logged_in);
  if(req.session.logged_in){
    console.log("inside if");
    const currentUser = await User.findByPk(req.session.user_id);
    console.log("user_id: ", currentUser);
    res.status(200).json(currentUser);
  }
})

router.put('/budget', async (req,res) =>{
  const currentUser = await User.findByPk(req.session.user_id);
  try{
    if (!currentUser){
      res.status(400).json({message: "User not found"});
    }
    else {
      console.log("in put route; ", req.body.budget_amount);
      currentUser.update({budget_amount: req.body.budget_amount})
      res.status(200).json(currentUser);
    }
  }
  catch(err){
    console.log(err);
    res.status(500)
  }
 
})


router.post('/', async (req, res) => {
  try {
    const userData = await User.create(req.body);

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      console.log (userData.id)
      

      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });

    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      console.log("user",userData.id);
      req.session.logged_in = true;
      console.log("session in login: ", req.session.logged_in);
     

      res.json({ user: userData, message: 'You are now logged in!' });
    });

  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/logout', (req, res) => {
  console.log("logout route");
  console.log("session in logout: ", req.session.logged_in);
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});


module.exports = router;
