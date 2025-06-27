// routes/team.routes.js
import express from 'express';
import {
  createTeam,
  getTeams,
  deleteTeam
} from '../controllers/team.controller.js';

import { protect } from '../middleware/auth.middleware.js';

const router = express.Router();

router.route('/')
  .get(protect, getTeams)
  .post(protect, createTeam);

router.route('/:id')
  .delete(protect, deleteTeam);

export default router;
