import * as ValidatorService from '../services/validators.service.js';
import { httpCode } from "../constants/index.js";
import { validatorMessages } from '../messages/index.js';

export const registerValidator = async (req, res) => {
    try {
        // Prepare Referral Code of the Validator
        const walletAddress = req.body.walletAddress;
        const promoCode = req.body.promoCode;
        const referralCode = `${walletAddress.toLowerCase().slice(0, 6)}2024`;
        req.body.referralCode = referralCode;
        // Check if validator already exists based on the wallet address
        const existingValidator = await ValidatorService.getValidatorByWalletAndPromo(walletAddress, promoCode);
        req.body.nodeCount = req.body.nodeCount ? req.body.nodeCount : 1;
        if(existingValidator) {
            const validator = await ValidatorService.updateValidator(existingValidator, {
                ...req.body,
                nodeCount: Number(req.body.nodeCount) + Number(existingValidator.nodeCount)
            });
            return res.status(httpCode.successful).send({
                status: true,
                message: validatorMessages.validator.register.success,
                data: validator
            });
        }
        const validator = await ValidatorService.createValidator(req.body);
        return res.status(httpCode.successful).send({
            status: true,
            message: validatorMessages.validator.register.success,
            data: validator
        });
    } catch(err) {
        console.log(err);
        if (err.name === 'ValidationError') {
            return res.status(httpCode.internalError).send({
                status: false,
                message: Object.values(err.errors).map(val => val.message)[0],
                data: null
            });
        }
        return res.status(httpCode.internalError).send({
            status: false,
            message: err.message,
            data: null
        });
    }
}

export const getValidatorByWalletAddress = async (req, res) => {
    try {
        const walletAddress = req.params.walletAddress;
        const validator = await ValidatorService.getValidatorByWalletAddress(walletAddress);
        if(!validator) {
            return res.status(httpCode.successful).send({
                status: false,
                message: validatorMessages.validator.found.error,
                data: null
            });
        }
        return res.status(httpCode.successful).send({
            status: true,
            message: validatorMessages.validator.found.success,
            data: validator
        });
    } catch(err) {
        console.log(err);
        return res.status(httpCode.internalError).send({
            status: false,
            message: err.message,
            data: null
        });
    }
}

export const checkIfValidReferralCode = async (req, res) => {
    try {
        const referralCode = req.params.referralCode;
        const walletAddress = req.params.walletAddress;
        const validator = await ValidatorService.getValidatorByReferralCode(referralCode);
        if(!validator) {
            return res.status(httpCode.successful).send({
                status: false,
                message: validatorMessages.validator.referralCode.invalid,
                data: null
            });
        }
        if(validator.walletAddress.toLowerCase() === walletAddress.toLowerCase() && validator.referralCode.toLowerCase() === referralCode.toLowerCase()) {
            return res.status(httpCode.successful).send({
                status: false,
                message: validatorMessages.validator.referralCode.cannotUseOwnCode,
                data: validator
            });
        } else {
            return res.status(httpCode.successful).send({
                status: true,
                message: validatorMessages.validator.referralCode.valid,
                data: validator
            });
        }
    } catch(err) {
        console.log(err);
        return res.status(httpCode.internalError).send({
            status: false,
            message: err.message,
            data: null
        });
    }
}