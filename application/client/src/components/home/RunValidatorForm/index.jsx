import { useFormik } from 'formik';
import Button from '../../ui/Button';
import TextField from '../../ui/TextField';
import { createValidatorSchema, validatorInitialValues } from './helper';
import { forwardRef, useEffect, useState } from 'react';
import Spinner from '../../ui/Spinner';
import { CURRENT_PHASE, phaseConfig } from '../../../utils/constants';
import { useSelector } from 'react-redux';
import { deposit, depositWithPromoCode, getBalance } from '../../../web3-module/library/validator.ethers';
import { validatorMessages } from '../../../utils/messages';
import { debounce } from 'lodash';

const RunValidatorForm = forwardRef(function RunValidatorForm(props, ref) {
    const { className } = props;
    const [isLoading, setIsLoading] = useState(false);
    const [depositAmount, setDepositAmount] = useState(0);
    const [walletBalance, setWalletBalance] = useState(0);
    const { walletAddress } = useSelector((state) => state.wallet);

    const fetchWalletBalance = debounce(async (walletAddress) => {
        let balance = 0;
        if (walletAddress) {
            setIsLoading(true);
            balance = await getBalance(walletAddress);
            setIsLoading(false);
        }
        setWalletBalance(balance);
    }, 0);

    const resetStates = () => {
        setIsLoading(false);
    };

    const depositAction = async (depositAmount, promoCode, successCallback) => {
        setIsLoading(true);
        let txnDeposit = null;
        if (promoCode) {
            txnDeposit = await depositWithPromoCode(depositAmount, promoCode);
        } else {
            txnDeposit = await deposit(depositAmount);
        }
        if (txnDeposit) {
            const receipt = await txnDeposit.wait();
            setIsLoading(false);
            if (receipt.status) {
                successCallback();
            }
        } else {
            setIsLoading(false);
        }
    };

    const submitDeposit = async (e, { resetForm }) => {
        const successCallback = async () => {
            resetForm();
            resetStates();
        };
        const payload = e;
        const promoCode = payload.promo_code;
        // Checking Wallet Balance
        if (Number(walletBalance) < Number(depositAmount)) {
            formikValidator.setErrors({ promo_code: validatorMessages.messages.validations.balance.error.insufficient });
        } else {
            await depositAction(depositAmount, promoCode, successCallback);
        }
    };

    const formikValidator = useFormik({
        validationSchema: createValidatorSchema(),
        onSubmit: submitDeposit,
        initialValues: validatorInitialValues,
        enableReinitialize: true,
        validateOnChange: true,
        validateOnBlur: true,
    });

    useEffect(() => {
        const currentPhase = CURRENT_PHASE;
        const currentPhaseConfig = phaseConfig[currentPhase];
        setDepositAmount(currentPhaseConfig.cost);
    }, []);

    useEffect(() => {
        fetchWalletBalance(walletAddress);
        formikValidator.setErrors({});
        resetStates();
    }, [walletAddress]);

    return (
        <div className={className} ref={ref}>
            <div className="bg-run-validator bg-no-repeat bg-[length:100%_100%] py-[60px] px-[80px]">
                <form onSubmit={formikValidator.handleSubmit} autoComplete="off">
                    <h2 className="text-white-100 text-label-20px-semibold pb-[12px] pt-[20px]">Run your own Validator Node</h2>
                    <TextField
                        name="promo_code"
                        required
                        value={formikValidator.values.promo_code}
                        onChange={formikValidator.handleChange}
                        placeholder="Enter the promo code (optional)"
                        className="border border-solid border-purple-200 shadow-text-field !py-0.5 !pr-0.5 !px-6 mb-3 h-10 text-white-100"
                    />
                    <Button
                        type="button"
                        loading={isLoading}
                        className="text-white-100 font-interMedium text-label-12px-regular py-3 !px-[48px] min-w-[183px] whitespace-nowrap disabled:opacity-60 !h-[40px]"
                        disabled={!formikValidator.isValid || !walletAddress}
                        loadingLabel={<Spinner />}
                        onClick={formikValidator.handleSubmit}
                    >
                        Buy your Validator Node Today
                    </Button>
                    <p className="text-red-100 py-2 text-label-12px-regular">{formikValidator.errors.promo_code}</p>
                </form>
            </div>
        </div>
    );
});

export default RunValidatorForm;
