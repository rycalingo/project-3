const router = require("express").Router();
const userController = require("../../controllers/userController");


// Matches with "/user/api"
router.route("/api")
  .get(userController.findAll)
  .post(userController.create);

  router.route("/api/login")
  .get(userController.findById);

// Matches with "/user/api/:id"
router
  .route("/:id")
  .get(userController.findById)
  .put(userController.update)
  .delete(userController.remove);

module.exports = router;

module.exports = function (app, passport) {


  app.get('/signup', userController.signup);


  app.get('/signin', userController.signin);


  app.post('/signup', passport.authenticate('local-signup', {
      successRedirect: '/task',

      failureRedirect: '/'
  }

  ));


  app.get('/task', isLoggedIn, userController.mainpage);



  app.get('/', userController.logout);


  app.post('/', passport.authenticate('local-signin', {
      successRedirect: '/task',

      failureRedirect: '/'
  }

  ));


  function isLoggedIn(req, res, next) {

      if (req.isAuthenticated())

          return next();

      res.redirect('/');

  }

}