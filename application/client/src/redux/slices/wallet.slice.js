import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    connectedWallet: {},
    walletAddress: "",
    selectedChain: null,
};

export const walletSliceName = "wallet";

// Note: this slice is persisted in localStorage, [check](application/client/src/redux/store/index.js:16)
const walletSlice = createSlice({
    name: walletSliceName,
    initialState,
    reducers: {
        setConnectedWallet: (state, action) => {
            state.connectedWallet = action.payload;
        },
        setWalletAddress: (state, action) => {
            state.walletAddress = action.payload;
        },
        setSelectedChain: (state, action) => {
            state.selectedChain = action.payload;
        },
    },
});
const walletReducer = walletSlice.reducer;

export const { setConnectedWallet, setWalletAddress, setSelectedChain } = walletSlice.actions;
export default walletReducer;
