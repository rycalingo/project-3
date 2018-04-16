
const router = require("express").Router();
const taskRoutes = require("./task");

// Task routes
router.use("/task", taskRoutes, (res, req)=> console.log(req));

module.exports = router;