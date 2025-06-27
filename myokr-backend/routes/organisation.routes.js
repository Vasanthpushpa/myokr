// routes/organisation.routes.js
import express from 'express';
import {
  createOrganisation,
  getOrganisations,
  deleteOrganisation,
} from '../controllers/organisation.controller.js';

const router = express.Router();

router.route('/').get(getOrganisations).post(createOrganisation);
router.route('/:id').delete(deleteOrganisation); // 👈 Important

export default router;

