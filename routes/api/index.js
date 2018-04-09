
const router = require("express").Router();
const taskRouts = require("./task");

// tasks routes
router.use("/tasks", taskRouts);

module.exports = router;