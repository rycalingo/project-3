
const router = require("express").Router();
const taskRoutes = require("./task");

// Book routes
router.use("/task", taskRoutes);

module.exports = router;