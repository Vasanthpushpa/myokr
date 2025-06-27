// routes/okr.routes.js
import express from 'express';
import {
  createOKR,
  getOKRs,
  getOKRById,
  updateOKR,
  deleteOKR,
} from '../controllers/okr.controller.js';
import { protect } from '../middleware/auth.middleware.js';

const router = express.Router();

router.route('/')
  .get(protect, getOKRs)
  .post(protect, createOKR);

router.route('/:id')
  .get(protect, getOKRById)
  .put(protect, updateOKR)
  .delete(protect, deleteOKR);

export default router;
