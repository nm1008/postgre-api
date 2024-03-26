const express = require("express");
const router = express.Router();
const controller = require("./controller");

//get employee limit of 5 
router.get("/", controller.getLimit5);

//get All Employee
router.get("/getAll", controller.getAllEmployee);

//get user by id
router.get("/:id", controller.getUserById);

//get user by name
router.post("/search", controller.getUserByName);

//add user
router.post("/", controller.addEmployeeUser);

//loginUser
router.post("/login", controller.loginUser);

//registerUser
router.post("/register", controller.registerUser);

//update user information
router.put("/:id", controller.updateUserById);

//delete user by id
router.delete("/:id", controller.deleteUserById);

module.exports = router;
