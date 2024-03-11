import axios from "axios";

export const fetchUSDTPrice = async () => {
    try {
        let url = import.meta.env.REACT_APP_COINGECKO_URL;
        const vsCurrency = import.meta.env.REACT_APP_COINGECKO_VS_CURRENCIES;
        const token = import.meta.env.REACT_APP_COINGECKO_TOKEN;
        url = url?.replace("[IDS]", token);
        url = url?.replace("[VSCURRENCIES]", vsCurrency);
        const priceResponse = await axios.get(url);

        if (priceResponse && priceResponse.data && Object.keys(priceResponse.data).length > 0) {
            const prices = priceResponse.data;
            let tokenUsdtPrice = 0;
            if (prices[token]) {
                tokenUsdtPrice = prices[token].usd;
            }
            return tokenUsdtPrice;
        }
        return 0;
    } catch (err) {
        console.error(err);
        return 0;
    }
};

export const checkIfWalletAddressExists = async (address) => {
    try {
        const baseUrl = import.meta.env.REACT_APP_VALIDATOR_API_BASE_URL;
        const url = `${baseUrl}/validator/get/${address}`;
        const response = await axios.get(url);
        if(response && response.status === 200 && response.data?.status === true && response.data?.data?.walletAddress.toLowerCase() === address.toLowerCase()) {
            return response.data.data;
        }
        return false;
    } catch (err) {
        console.error(err);
        return false;
    }
}

export const saveValidator = async (validatorBody) => {
    try {
        const baseUrl = import.meta.env.REACT_APP_VALIDATOR_API_BASE_URL;
        const url = `${baseUrl}/validator/register`;
        const response = await axios.post(url, validatorBody);
        if(response && response.status === 200 && response.data?.status === true) {
            return response.data.data;
        }
        return false;
    } catch (err) {
        console.log(err);
        return false;
    }
}

export const isReferralCodeValid = async (walletAddress, referralCode) => {
    try {
        const baseUrl = import.meta.env.REACT_APP_VALIDATOR_API_BASE_URL;
        const url = `${baseUrl}/validator/isValidReferral/${walletAddress}/${referralCode}`;
        const response = await axios.get(url);
        if(response && response.status === 200 && response.data?.status === true) {
            return response.data.data;
        }
        return false;
    } catch (err) {
        console.log(err);
        return false;
    }
}