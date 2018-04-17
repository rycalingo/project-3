
const router = require("express").Router();
const taskRoutes = require("./task");
const userRoutes = require("./user");

// Task routes
router.use("/task", taskRoutes, (res, req)=> console.log(req));
router.use("/signup", userRoutes, (res, req)=> console.log(req));


module.exports = router;