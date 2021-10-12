import express from 'express'
import { getNewsletterUsers,subcribeUser, unSubcribeUser, getNewsletterUser } from '../controllers/newsletterUserController.js'

const router = express.Router();

router.route('/newsletterusers').get(getNewsletterUsers)
router.route('/newsletteruser/:email').get(getNewsletterUser)
router.route('/usersubscribe').post(subcribeUser)
router.route('/userunsubscribe').put(unSubcribeUser)

export default router;
