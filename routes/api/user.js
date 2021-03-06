const router = require("express").Router();
const userController = require("../../controllers/userController");

// Matches with "/user/api"
router.route("/api")
  .get(userController.findAll)
  .post(userController.create);

// Matches with "/user/api/:id"
router
  .route("/:id")
  .get(userController.findById)
  .put(userController.update)
  .delete(userController.remove);

module.exports = router;