import express from 'express';
import {
  createDepartment,
  getDepartments,
  deleteDepartment,
} from '../controllers/department.controller.js';

const router = express.Router();

router.route('/').get(getDepartments).post(createDepartment);
router.route('/:id').delete(deleteDepartment);

export default router;
