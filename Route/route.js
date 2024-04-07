const express = require("express");
const router = express.Router();
const {
  getAllUser,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} = require("../Controller/UserController.js");

router.get("/", getAllUser);

router.get("/:id", getUserById);

router.post("/", createUser);

router.put("/:id", updateUser);

router.delete("/:id", deleteUser);


module.exports=router;