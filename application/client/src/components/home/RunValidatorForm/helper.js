import * as yup from "yup";
import { validatorMessages } from "../../../utils/messages";
import { PROMO_CODES } from "../../../utils/constants";
import { isReferralCodeValid } from "../../../redux/action/action";

export const createValidatorSchema = (walletAddress, availableNodeCount) => {
    return yup.object().shape({
        promo_code: yup
            .string()
            .test("validate-promo-code", validatorMessages.messages.validations.promo_code.error.validate_promo_code, async (val) => {
                if (val !== undefined && val !== "") {
                    val = val.toLowerCase();
                    let isDefinedCode = false;
                    let isCustomCode = false;
                    isDefinedCode = (val === PROMO_CODES.nodeOps.toLowerCase() || val === PROMO_CODES.spheron.toLowerCase() || val === PROMO_CODES.max.toLowerCase() || val === PROMO_CODES.min.toLowerCase());
                    if(!isDefinedCode) {
                        isCustomCode = await isReferralCodeValid(walletAddress, val);
                    }
                    return isDefinedCode || isCustomCode;
                }
                return true;
            }),
        node_count: yup
            .string()
            .required(validatorMessages.messages.validations.node_count.error.required)
            .test("validate-node-count", validatorMessages.messages.validations.node_count.error.validate_node_count, async (val) => {
                if (val !== undefined && val !== "") {
                    val = Number(val);
                    return (val > 0 && val <= availableNodeCount);
                }
                return true;
            }),
        cypher_address: yup
            .string()
            .required(validatorMessages.messages.validations.cypher_address.error.required)
            .test("validate-cypher-address", validatorMessages.messages.validations.cypher_address.error.validate_cypher_address, async (val) => {
                if (val !== undefined) {
                    return val.length === 34 && val.startsWith("C");
                }
                return true;
            })
    });
};

export const validatorInitialValues = {
    promo_code: "",
    node_count: "1",
    cypher_address: ""
};