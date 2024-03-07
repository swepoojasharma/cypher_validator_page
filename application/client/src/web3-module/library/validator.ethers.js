import { ethers } from "ethers";
import { parseUnits, web3Config } from "./common.ethers";
import { DECIMALS, DESIRED_CHAIN_ID, GAS_LIMIT_MAX, VALIDATOR_CONTRACT_ABI, VALIDATOR_CONTRACT_ADDRESS } from "../constants";

const getMaxLimit = (limit) => {
    const newLimit = Number(limit) + GAS_LIMIT_MAX;
    return newLimit;
};

export const getBalance = async (address) => {
    try {
        let userBalance = await web3Config.providerRpc.getBalance(address);
        userBalance = ethers.utils.formatEther(userBalance);
        return userBalance;
    } catch (err) {
        console.log(`Error on validator.ethers -> getBalance -> `, err);
        return 0;
    }
}

export const getSlot = async () => {
    try {
        // Contract instance
        const contractInstance = new ethers.Contract(
            VALIDATOR_CONTRACT_ADDRESS[DESIRED_CHAIN_ID],
            VALIDATOR_CONTRACT_ABI,
            web3Config.providerRpc
        );
        let currentSlot = await contractInstance.getSlot();
        return Number(currentSlot);
    } catch (err) {
        console.log(`Error on validator.ethers -> getSlot -> `, err);
        return 0;
    }
}

export const getCurrentPhaseAndNodesLeft = async () => {
    try {
        // Contract instance
        const contractInstance = new ethers.Contract(
            VALIDATOR_CONTRACT_ADDRESS[DESIRED_CHAIN_ID],
            VALIDATOR_CONTRACT_ABI,
            web3Config.providerRpc
        );
        let availability = await contractInstance.getCurrentPhaseAndNodesLeft();
        return Number(availability['nodesLeftInPhase']);
    } catch (err) {
        console.log(`Error on validator.ethers -> getCurrentPhaseAndNodesLeft -> `, err);
        return 0;
    }
}

export const deposit = async (amount, nodeCount) => {
    try {
        let value = 0;
        // Convert amount to decimals
        amount = parseUnits(amount, DECIMALS);
        value = amount;
        // Contract instance
        const contractInstance = new ethers.Contract(
            VALIDATOR_CONTRACT_ADDRESS[DESIRED_CHAIN_ID],
            VALIDATOR_CONTRACT_ABI,
            web3Config.signer
        );
        // Estimate gas limit
        let estimatedGasLimit = await contractInstance.estimateGas.depositETH(nodeCount, {
            from: web3Config.account,
            value,
        });
        estimatedGasLimit = getMaxLimit(estimatedGasLimit);
        // Raw transaction inputs
        const overrides = {
            gasLimit: estimatedGasLimit,
            maxPriorityFeePerGas: null,
            maxFeePerGas: null,
            from: web3Config.account,
            value,
        };
        // Contract function call
        const transaction = await contractInstance.depositETH(nodeCount, overrides);
        return transaction;
    } catch (err) {
        console.log(`Error on validator.ethers -> deposit ->  ${err}`);
        return null;
    }
};

export const depositWithPromoCode = async (amount, nodeCount, promoCode) => {
    try {
        let value = 0;
        // Convert amount to decimals
        amount = parseUnits(amount, DECIMALS);
        value = amount;
        // Contract instance
        const contractInstance = new ethers.Contract(
            VALIDATOR_CONTRACT_ADDRESS[DESIRED_CHAIN_ID],
            VALIDATOR_CONTRACT_ABI,
            web3Config.signer
        );
        // Estimate gas limit
        let estimatedGasLimit = await contractInstance.estimateGas.depositETHPromoCode(nodeCount, promoCode, {
            from: web3Config.account,
            value,
        });
        estimatedGasLimit = getMaxLimit(estimatedGasLimit);
        // Raw transaction inputs
        const overrides = {
            gasLimit: estimatedGasLimit,
            maxPriorityFeePerGas: null,
            maxFeePerGas: null,
            from: web3Config.account,
            value,
        };
        // Contract function call
        const transaction = await contractInstance.depositETHPromoCode(nodeCount, promoCode, overrides);
        return transaction;
    } catch (err) {
        console.log(`Error on validator.ethers -> depositWithPromoCode ->  ${err}`);
        return null;
    }
};