import express from "express";
import { login, logout, signup, onboard } from "../controllers/auth.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";
import User from "../models/User.js";
const router = express.Router();
//post is one of the operations that changes server state i.e. it destroyes a session and balance a token
router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);

router.post("/onboarding",protectRoute, onboard);
//check if the user is logged in or not
router.get("/me", protectRoute, (req, res) => {
    res.status(200).json({success: true, user: req.user});
});

export default router;

