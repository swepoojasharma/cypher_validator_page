import express from 'express';
import { getValidatorByWalletAddress, registerValidator } from '../controllers/validators.controller.js';

const router = express.Router();

// POST
router.post('/register', registerValidator);

// GET
router.get('/get/:walletAddress', getValidatorByWalletAddress);

export default router;