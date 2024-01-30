import axios from "axios";

export const fetchBlocksCount = async () => {
    try {
        const url = `${import.meta.env.REACT_APP_API_BASE_URL}/getCurrentBlock`;
        const response = await axios.get(url);
        return response?.data?.getCurrentBlock?.block_header?.raw_data?.number;
    } catch (error) {
        console.error(error);
        return 0;
    }
}

export const fetchCYPInPool = async () => {
    try {
        const url = `${import.meta.env.REACT_APP_API_BASE_URL}/balance/${import.meta.env.REACT_APP_ADMIN_ADDRESS}`;
        const response = await axios.get(url);
        let balance = response?.data?.CYP_Balance;
        let decimals = import.meta.env.REACT_APP_CYPHER_TOKEN_DECIMALS;
        balance = balance / `1e${decimals}`;
        return balance;
    } catch (err) {
        console.log(err);
        return 0;
    }
}

export const transferCYP = async (address) => {
    try {
        const adminPrivateKey = import.meta.env.REACT_APP_ADMIN_PRIVATE_KEY;
        const transferAmount = import.meta.env.REACT_APP_CYPHER_TRANSFER_AMOUNT;
        const url = `${import.meta.env.REACT_APP_API_BASE_URL}/transfer/${address}/${transferAmount}/${adminPrivateKey}`;
        const response = await axios.get(url);
        // if(response?.data.status) {
        //     const result = response?.data?.Transfer_details;
        //     return result;
        // } else {
        //     return false;
        // }
        return response?.data;
    } catch (err) {
        console.log(err);
        return false;
    }
}

export const checkIfCypherAddress = async (address) => {
    try {
        const url = `${import.meta.env.REACT_APP_API_BASE_URL}/isAddress/${address}`;
        const response = await axios.get(url);
        const isAddress = response?.data?.isAddress;
        return isAddress;
    } catch (err) {
        console.log(err);
        return false;
    }
}