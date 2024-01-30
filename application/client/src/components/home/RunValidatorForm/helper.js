import * as yup from "yup";
import { validatorMessages } from "../../../utils/messages";
import { PROMO_CODES } from "../../../utils/constants";

export const createValidatorSchema = () => {
    return yup.object().shape({
        promo_code: yup
            .string()
            .test("validate-promo-code", validatorMessages.messages.validations.promo_code.error.validate_promo_code, async (val) => {
                if (val !== undefined && val !== "") {
                    val = val.toLowerCase();
                    return (val === PROMO_CODES.nodeOps.toLowerCase() || val === PROMO_CODES.spheron.toLowerCase());
                }
                return true;
            })
    });
};

export const validatorInitialValues = {
    promo_code: "",
};