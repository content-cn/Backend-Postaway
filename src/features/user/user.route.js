import express from "express";
import UserController from "./user.controller.js";

const router = express.Router();

const userController = new UserController();

router.post("/signup", userController.signUp);
router.post("/signin", userController.signIn);

export default router;
