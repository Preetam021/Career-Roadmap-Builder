import {Router} from 'express';
import { getGoals, createGoal } from '../controllers/goalController.js';
import protect from '../middleware/authMiddleware.js'

const router = Router();

router.get('/', protect, getGoals);
router.post("/",protect, createGoal);

export default router;