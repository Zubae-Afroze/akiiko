import express from 'express'
import { subcribeUser, unSubcribeUser } from '../controllers/newsletterUserController.js'

const router = express.Router();

router.route('/usersubscribe').post(subcribeUser)
router.route('/userunsubscribe').post(unSubcribeUser)

export default router;
