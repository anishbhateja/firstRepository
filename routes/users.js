const express = require("express");
const router = express.Router();

const users_controller = require("../controllers/users_controller");

router.get("/profile", users_controller.profile);

module.exports = router;

//we want to access the user_controller using this route
