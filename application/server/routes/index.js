import express from 'express';
import { checkIfValidReferralCode, getValidatorByWalletAddress, registerValidator } from '../controllers/validators.controller.js';

const router = express.Router();

// POST
router.post('/register', registerValidator);

// GET
router.get('/get/:walletAddress', getValidatorByWalletAddress);
router.get('/isValidReferral/:walletAddress/:referralCode', checkIfValidReferralCode);

export default router;