import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoggingIn: false,
    isNetworkMismatched: false,
    isInternetConnected: true,
    selectedPoolToken: {},
    supportedChains: [],
    contract: {},
    currChainId: null,
    desiredChainId: null,
    isUsdtPriceUpdateInPool: false,
    isFaucetEnabled: false,
    isDefaultChainMapped: false,
};

export const commonSliceName = "common";

const commonSlice = createSlice({
    name: commonSliceName,
    initialState,
    reducers: {
        setIsLoggingIn: (state, action) => {
            state.isLoggingIn = action.payload;
        },
        setIsNetworkMismatched: (state, action) => {
            state.isNetworkMismatched = action.payload;
        },
        setSupportedChains: (state, action) => {
            state.supportedChains = action.payload;
        },
        setSelectedPoolToken: (state, action) => {
            state.selectedPoolToken = action.payload;
        },
        setContract: (state, action) => {
            state.contract = action.payload;
        },
        setCurrChainId: (state, action) => {
            state.currChainId = action.payload;
        },
        setDesiredChainId: (state, action) => {
            state.desiredChainId = action.payload;
        },
        setIsUsdtPriceUpdateInPool: (state, action) => {
            state.isUsdtPriceUpdateInPool = action.payload;
        },
        setIsFaucetEnabled: (state, action) => {
            state.isFaucetEnabled = action.payload;
        },
        setIsInternetConnected: (state, action) => {
            state.isInternetConnected = action.payload;
        },
        setIsDefaultChainMapped: (state, action) => {
            state.isDefaultChainMapped = action.payload;
        },
    },
});

const commonReducer = commonSlice.reducer;

export const {
    setIsLoggingIn,
    setIsNetworkMismatched,
    setSupportedChains,
    setContract,
    setSelectedPoolToken,
    setCurrChainId,
    setDesiredChainId,
    setIsUsdtPriceUpdateInPool,
    setIsFaucetEnabled,
    setIsInternetConnected,
    setIsDefaultChainMapped,
} = commonSlice.actions;
export default commonReducer;
