import {Router} from 'express';
import { getGoals, createGoal, deleteGoal, toggleGoalCompletion } from '../controllers/goalController.js';
import protect from '../middleware/authMiddleware.js'

const router = Router();

router.get('/', protect, getGoals);
router.post("/",protect, createGoal);
router.delete("/:id", protect, deleteGoal);
router.patch("/:id/toggle", protect, toggleGoalCompletion)

export default router;