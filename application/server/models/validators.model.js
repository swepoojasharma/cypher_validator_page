import mongoose from "mongoose";
import { validatorMessages } from "../messages/index.js";

const validatorsSchema = new mongoose.Schema(
    {
        walletAddress: {
            type: String,
            required: [true, validatorMessages.walletAddress.required],
            // required: true,
            unique: true,
        },
        nodeCount: {
            type: Number,
            required: [true, validatorMessages.nodeCount.required],
            // required: true,
            default: 1
        },
        cypherAddress: {
            type: String,
            required: [true, validatorMessages.cypherAddress.required],
            // required: true,
            validate(value) {
                if (!(value && value.length === 34 && value.startsWith("C"))) {
                    throw new Error(validatorMessages.cypherAddress.invalid);
                }
            }
        },
        promoCode: {
            type: String,
        },
        firstName: {
            type: String,
        },
        secondName: {
            type: String,
        },
        telegramUserName: {
            type: String,
        },
        twitterUserName: {
            type: String,
        },
        email: {
            type: String,
        },
    },
    {
        timestamps: true,
    }
);

validatorsSchema.methods.isCypherAddress

const Validators = mongoose.model("validators", validatorsSchema, "validators");
export default Validators;