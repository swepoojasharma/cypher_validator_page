import { forwardRef, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useFormik } from 'formik';
import { cx } from 'class-variance-authority';
import { debounce } from 'lodash';
import { deposit, depositWithPromoCode, getBalance, getCurrentPhaseAndNodesLeft, getSlot } from '../../../web3-module/library/validator.ethers';
import { phaseConfig } from '../../../utils/constants';
import { validatorMessages } from '../../../utils/messages';
import { getPhaseBySlot } from '../../../utils/helpers';
import { checkIfWalletAddressExists, saveValidator } from '../../../redux/action/action';
import Button from '../../ui/Button';
import TextField from '../../ui/TextField';
import Spinner from '../../ui/Spinner';
import { createValidatorSchema, validatorInitialValues } from './helper';

const RunValidatorForm = forwardRef(function RunValidatorForm(props, ref) {
    const { className } = props;
    const [isLoading, setIsLoading] = useState(false);
    const [depositAmount, setDepositAmount] = useState(0);
    const [walletBalance, setWalletBalance] = useState(0);
    const [phaseSlotAvailability, setPhaseSlotAvailability] = useState(0);
    const [isWalletAddressExist, setIsWalletAddressExist] = useState(false);
    const [cypherAddress, setCypherAddress] = useState('');
    const { walletAddress } = useSelector((state) => state.wallet);

    function checkForQueryString() {
        const queryString = window.location.search;
        const params = new URLSearchParams(queryString);
        const referralCode = params.get('referral');
        if (referralCode) {
            formikValidator.setFieldValue('promo_code', referralCode);
        }
    }

    async function checkCurrentConnectedAddress(walletAddress) {
        if (walletAddress) {
            const response = await checkIfWalletAddressExists(walletAddress);
            if (response !== false) {
                setCypherAddress(response.cypherAddress);
                setIsWalletAddressExist(true);
                formikValidator.setFieldValue('cypher_address', response.cypherAddress);
            } else {
                setCypherAddress('');
                setIsWalletAddressExist(false);
            }
        } else {
            setCypherAddress('');
            setIsWalletAddressExist(false);
        }
    }

    async function calculateDepositAmount() {
        const currentSlot = await getSlot();
        const currentPhase = getPhaseBySlot(currentSlot);
        const currentPhaseConfig = phaseConfig[currentPhase];
        setDepositAmount(currentPhaseConfig.cost);
    }

    async function getCurrentPhaseSlotAvailability() {
        const availability = await getCurrentPhaseAndNodesLeft();
        setPhaseSlotAvailability(availability);
    }

    const fetchWalletBalance = async (walletAddress) => {
        let balance = 0;
        if (walletAddress) {
            setIsLoading(true);
            balance = await getBalance(walletAddress);
            setIsLoading(false);
        }
        setWalletBalance(balance);
    };

    const fetchWalletBalanceDebounced = debounce(fetchWalletBalance, 0);

    const resetStates = () => {
        setIsLoading(false);
    };

    const depositAction = async (depositAmount, nodeCount, cypherAdd, promoCode, successCallback, validatorObj) => {
        setIsLoading(true);
        let txnDeposit = null;
        if (promoCode) {
            txnDeposit = await depositWithPromoCode(depositAmount, nodeCount, cypherAdd, promoCode);
        } else {
            txnDeposit = await deposit(depositAmount, nodeCount, cypherAdd);
        }
        if (txnDeposit) {
            const receipt = await txnDeposit.wait();
            setIsLoading(false);
            if (receipt.status) {
                successCallback(validatorObj);
            }
        } else {
            setIsLoading(false);
        }
    };

    const submitDeposit = async (e, { resetForm }) => {
        const payload = e;
        const promoCode = payload.promo_code;
        const nodeCount = payload.node_count;
        const finalDepositAmount = Number(nodeCount) * Number(depositAmount);
        // Checking Wallet Balance
        if (Number(walletBalance) < finalDepositAmount) {
            formikValidator.setErrors({ promo_code: validatorMessages.messages.validations.balance.error.insufficient });
        } else {
            const validatorObj = {
                walletAddress,
                cypherAddress: payload.cypher_address,
                nodeCount,
                promoCode,
            };
            const successCallback = async (validatorObj) => {
                resetForm();
                resetStates();
                setIsLoading(true);
                await calculateDepositAmount();
                await fetchWalletBalance(walletAddress);
                await getCurrentPhaseSlotAvailability();
                formikValidator.setFieldValue('cypher_address', cypherAddress);
                // Save Validator in the database
                await saveValidator(validatorObj);
                await checkCurrentConnectedAddress(walletAddress);
                setIsLoading(false);
            };
            await depositAction(finalDepositAmount, nodeCount, payload.cypher_address, promoCode, successCallback, validatorObj);
        }
    };

    const formikValidator = useFormik({
        validationSchema: createValidatorSchema(walletAddress, phaseSlotAvailability),
        onSubmit: submitDeposit,
        initialValues: validatorInitialValues,
        enableReinitialize: true,
        validateOnChange: true,
        validateOnBlur: true,
    });

    useEffect(() => {
        checkForQueryString();
        calculateDepositAmount();
        getCurrentPhaseSlotAvailability();
    }, []);

    useEffect(() => {
        fetchWalletBalanceDebounced(walletAddress);
        formikValidator.setErrors({});
        resetStates();
        // Call API to check if this wallet address exists in the database
        checkCurrentConnectedAddress(walletAddress);
    }, [walletAddress]);

    useEffect(() => {
        if (phaseSlotAvailability > 0) {
            formikValidator.setFieldTouched('node_count', true);
        }
    }, [phaseSlotAvailability]);

    return (
        <div className={className} ref={ref}>
            <div className="bg-run-validator bg-no-repeat bg-cover bg-left rounded-[36px]">
                <div className="bg-run-validator bg-no-repeat bg-cover bg-right rounded-[36px] py-[24px] px-[60px]">
                    <form onSubmit={formikValidator.handleSubmit} autoComplete="off">
                        <h2 className="text-white-100 text-label-20px-semibold pb-[12px] pt-[20px]">Run your own Validator Node</h2>
                        <TextField
                            name="promo_code"
                            required
                            value={formikValidator.values.promo_code}
                            onChange={formikValidator.handleChange}
                            placeholder="Enter the Promo/Referral code (optional)"
                            className="border border-solid border-purple-200 shadow-text-field !py-0.5 !pr-0.5 !px-6 mb-3 h-10 text-white-100"
                        />
                        <TextField
                            name="node_count"
                            required
                            value={formikValidator.values.node_count}
                            onChange={formikValidator.handleChange}
                            placeholder="Enter number of nodes to buy"
                            className="border border-solid border-purple-200 shadow-text-field !py-0.5 !pr-0.5 !px-6 mb-3 h-10 text-white-100"
                        />
                        <TextField
                            name="cypher_address"
                            required
                            value={formikValidator.values.cypher_address}
                            onChange={formikValidator.handleChange}
                            placeholder="Enter your Cypher Address"
                            className={cx(
                                'border border-solid border-purple-200 shadow-text-field !py-0.5 !pr-0.5 !px-6 mb-3 h-10 text-white-100 disabled:!text-gray-700 disabled:!border-gray-800',
                                isWalletAddressExist && 'opacity-50'
                            )}
                            disabled={isWalletAddressExist}
                            rightButton={
                                <a
                                    href={import.meta.env.REACT_APP_WEB_WALLET_URL}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-white-100 bg-blue-200 font-interMedium text-label-12px-regular flex justify-center items-center py-3 !px-[12px] whitespace-nowrap !h-[32px] rounded-[10px] mr-[2px]"
                                >
                                    Get
                                </a>
                            }
                        />
                        <Button
                            type="button"
                            loading={isLoading}
                            className="text-white-100 w-full font-interMedium text-label-12px-regular py-3 !px-[48px] min-w-[183px] whitespace-nowrap disabled:opacity-60 !h-[40px]"
                            disabled={!formikValidator.isValid || !walletAddress}
                            loadingLabel={<Spinner />}
                            onClick={formikValidator.handleSubmit}
                        >
                            Buy your Validator Node Today
                        </Button>
                        <h4 className="text-white-100 text-label-16px-semibold my-3">
                            Current Phase Node Count Availability: {phaseSlotAvailability}
                        </h4>
                        <p className="text-red-100 py-2 text-label-12px-regular">
                            {formikValidator.touched.node_count && formikValidator.errors.node_count
                                ? formikValidator.errors.node_count
                                : formikValidator.touched.cypher_address && formikValidator.errors.cypher_address
                                  ? formikValidator.errors.cypher_address
                                  : formikValidator.errors.promo_code}
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
});

export default RunValidatorForm;
