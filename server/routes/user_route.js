const user_conroller = require("../controllers/user_controller");

const express = require('express')

const router = express.Router()


router.get("/view",user_conroller.user_view_details)

module.exports = router;