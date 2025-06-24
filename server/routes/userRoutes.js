import { Router } from "express";
import { getUserProfile, loginUser, registerUser } from "../controllers/userController.js";
import protect from "../middleware/authMiddleware.js";

const router = Router();

router.post("/register", registerUser);
router.post('/login', loginUser);

router.get('/profile',protect, getUserProfile);

export default router;
