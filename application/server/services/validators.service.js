// Service code
import Validator from '../models/validators.model.js';

export const createValidator = async (body) => {
    return Validator.create(body);
}

export const getValidatorByWalletAddress = async (walletAddress) => {
    return Validator.findOne({ walletAddress });
}

export const getValidatorByWalletAndPromo = async (walletAddress, promoCode) => {
    // return Validator.findOne({ walletAddress: walletAddress.toLowerCase(), promoCode: promoCode.toLowerCase() });
    return Validator.findOne({
        "walletAddress": walletAddress ? { $regex: new RegExp("^" + walletAddress.toLowerCase(), "i") } : walletAddress,
        "promoCode": promoCode ? { $regex: new RegExp("^" + promoCode.toLowerCase(), "i") } : promoCode
    });
}

export const getValidatorByReferralCode = async (referralCode) => {
    return Validator.findOne({ referralCode: referralCode.toLowerCase() });
}

export const getValidatorByCypherAddress = async (cypherAddress) => {
    return Validator.findOne({ cypherAddress }, {_id: false, __v: false});
}

export const updateValidator = async (validator, updateBody) => {
    Object.assign(validator, updateBody);
    await validator.save();
    return validator;
}

export const getValidators = async () => {
    return Validator.find({_id: false, __v: false});
}