
const router = require("express").Router();
const taskRoutes = require("./task");

// tasks routes
router.use("/tasks", taskRoutes);

module.exports = router;