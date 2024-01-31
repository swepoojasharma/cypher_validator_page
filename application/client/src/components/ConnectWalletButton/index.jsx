import { useAddress, useDisconnect, useMetamask } from '@thirdweb-dev/react';
import { cx } from 'class-variance-authority';
import Button from '../ui/Button';
import { convertStringWithEllipsis, copyToClipboard } from '../../utils/helpers';
import { useEffect, useState } from 'react';
import CopyIcon from '../../assets/svg-components/CopyIcon';
import DisconnectIcon from '../../assets/svg-components/DisconnectIcon';
import { useDispatch, useSelector } from 'react-redux';
import { setConnectedWallet, setWalletAddress } from '../../redux/slices/wallet.slice';
import { setIsLoggingIn } from '../../redux/slices/common.slice';
import { initWeb3Config } from '../../web3-module/library/common.ethers';
import chains from '../../web3-module/config/chains';
import { DESIRED_CHAIN_ID, WALLETS } from '../../web3-module/constants';

function ConnectWalletButton() {
    const address = useAddress();
    const dispatch = useDispatch();
    const connectMetamask = useMetamask();
    const disconnectWallet = useDisconnect();
    const [isAddressCopied, setIsAddressCopied] = useState(false);
    const { connectedWallet, walletAddress } = useSelector((state) => state.wallet);

    const connectWallet = async () => {
        try {
            const data = await connectMetamask();
            if (data.error) {
                console.error('Connect-wallet: error: ', data.error);
                return false;
            }
            dispatch(setIsLoggingIn(true));
            window.provider = window.ethereum;
            return true;
        } catch (err) {
            console.error('connectWallet', err);
            return false;
        }
    };

    const disconnect = async () => {
        await disconnectWallet();
        window.provider = undefined;
        dispatch(setIsLoggingIn(false));
        dispatch(setConnectedWallet(''));
        dispatch(setWalletAddress(''));
    };

    const onCopyAddress = () => {
        copyToClipboard(
            address,
            () => {
                setIsAddressCopied(true);
            },
            () => {
                setIsAddressCopied(false);
            }
        );
    };

    useEffect(() => {
        dispatch(setWalletAddress(address));
    }, [address, dispatch]);

    useEffect(() => {
        const desiredChainInfo = chains.find((item) => item.chainId === DESIRED_CHAIN_ID);
        initWeb3Config({
            walletAddress,
            walletProvider: window.provider,
            walletProviderRpc: desiredChainInfo?.rpcURL,
        });
    }, [walletAddress]);

    useEffect(() => {
        if (connectedWallet) {
            connectWallet();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [connectedWallet]);

    return (
        <>
            {!address ? (
                <Button
                    onClick={() => {
                        connectWallet().then((res) => {
                            if (res) {
                                dispatch(setConnectedWallet(WALLETS.metamask));
                            }
                        });
                    }}
                    className="rounded-[24px] px-6 py-3 border-2 border-solid border-purple-100 bg-white-100 text-purple-100 text-label-14px-medium hover:bg-purple-100 hover:text-white-100 hover:!border-solid"
                >
                    Connect Wallet
                </Button>
            ) : (
                <div className="flex items-center">
                    <div className="flex items-center">
                        <span className="mr-2 text-label-14px-medium text-txtElement-high">{convertStringWithEllipsis(address)}</span>
                        <button
                            onClick={onCopyAddress}
                            className="flex w-full gap-[6px] rounded-[10px] p-2.5 hover:bg-surface-1 hover:text-txtElement-medium active:bg-surface-2"
                        >
                            <CopyIcon className={cx(isAddressCopied && 'stroke-accent-blue-400', !isAddressCopied && 'stroke-txtElement-high ')} />
                            {/* <div
                            className={cx(
                                'text-label-14px-medium',
                                isAddressCopied && 'text-accent-blue-400',
                                !isAddressCopied && 'text-txtElement-high '
                            )}
                        >
                            {isAddressCopied ? 'Copied Address' : 'Copy Address'}
                        </div> */}
                        </button>
                    </div>
                    <button
                        onClick={disconnect}
                        className="flex items-center w-full gap-[6px] rounded-[10px] p-2.5 hover:bg-surface-1 hover:text-txtElement-medium active:bg-surface-2"
                    >
                        <DisconnectIcon />
                        <div className="text-label-14px-medium text-txtElement-high">Disconnect</div>
                    </button>
                </div>
            )}
        </>
    );
}

export default ConnectWalletButton;
