import { ethers } from "ethers";

export const web3Config = {
    account: null,
    provider: null,
    providerRpc: null,
    signer: null,
};

export const initWeb3Config = ({ walletAddress, walletProvider, walletProviderRpc }) => {
    try {
        if (walletAddress) {
            web3Config.account = walletAddress;
        }
        if (walletProvider) {
            web3Config.provider = new ethers.providers.Web3Provider(walletProvider);
        }
        if (walletProviderRpc) {
            web3Config.providerRpc = new ethers.providers.JsonRpcProvider(walletProviderRpc);
        }
        if (web3Config && web3Config.provider && web3Config.account) {
            web3Config.signer = web3Config.provider?.getSigner(web3Config.account);
        }
    } catch (err) {
        console.error(`Error on common.ethers -> initWeb3Config ->  ${err}`);
        web3Config.account = "";
        web3Config.provider = null;
        web3Config.providerRpc = null;
        web3Config.signer = null;
    }
};

export const getCurrentChainId = async () => {
    let chainId = null;
    if (window.ethereum) {
        const id = await window.ethereum.request({ method: "eth_chainId" });
        chainId = Number(id);
    }
    return chainId;
};

export const formatUnits = (amount, decimals) => {
    let formattedUnit = 0;
    if (decimals) {
        formattedUnit = ethers.utils.formatUnits(amount, decimals);
    } else {
        formattedUnit = ethers.utils.formatEther(amount);
    }
    return formattedUnit;
};

export const parseUnits = (amount, decimals) => {
    const value = amount.toString();
    return ethers.utils.parseUnits(value, decimals);
};