// import ChevronRight from '../../assets/svg-components/ChevronRight';
// import DarkTheme from '../../assets/svg-components/DarkTheme';
import { useState } from 'react';
import HeaderLogo from '../../assets/svg-components/HeaderLogo';
import ConnectWalletButton from '../ConnectWalletButton';

function Header() {
    return (
        <header>
            <div className="strip bg-purple-100 fixed w-full h-[48px] z-[100] flex justify-center items-center">
                <div className="text-white-100 text-label-16px-regular">
                    Amazing News - Each Validator onboarding in TestNet to get $10000 worth of Cypher at the MainNet launch, over and above Block
                    rewards.
                </div>
            </div>
            <nav className="bg-white-100 border-gray-200 pl-3 pr-6 lg:px-6 py-2.5 dark:bg-gray-800 shadow-header pt-[56px]">
                <div className="flex flex-wrap justify-between items-center mx-auto">
                    <a href="/" className="flex items-center">
                        <HeaderLogo className="mr-3 h-8 sm:h-9" />
                    </a>
                    <div className="flex items-center lg:order-2">
                        {/* <button
                            onClick={() => {}}
                            className="text-white font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            <DarkTheme />
                        </button>
                        <a href="#" className="block py-2 pr-4 pl-3 font-medium text-black-400 lg:p-0 text-label-14px-medium">
                            Dashboard
                        </a>
                        <button
                            onClick={() => {}}
                            className="text-white font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            <ChevronRight />
                        </button> */}
                        <ConnectWalletButton />
                        <button
                            data-collapse-toggle="mobile-menu-2"
                            type="button"
                            className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                            aria-controls="mobile-menu-2"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    fillRule="evenodd"
                                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                            <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    fillRule="evenodd"
                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                        </button>
                    </div>
                    <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <a
                                    href="https://support-168.gitbook.io/cypher-blockchain-whitepaper-v1.0/introduction"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="block py-2 pr-4 pl-3 text-black-400 lg:p-0 text-label-14px-medium"
                                    aria-current="page"
                                >
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a
                                    href="http://docs.cypherchain.org/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="block py-2 pr-4 pl-3 text-black-100 lg:p-0 text-label-14px-medium"
                                >
                                    Developers Section
                                </a>
                            </li>
                            <li>
                                <a
                                    href="http://docs.cypherchain.org/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="block py-2 pr-4 pl-3 text-black-100 lg:p-0 text-label-14px-medium"
                                >
                                    Whitepaper
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://support-168.gitbook.io/cypher-blockchain-whitepaper-v1.0/roadmap"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="block py-2 pr-4 pl-3 lg:p-0 text-label-14px-medium"
                                >
                                    Roadmap
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://support-168.gitbook.io/cypher-blockchain-whitepaper-v1.0/tokenomics"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="block py-2 pr-4 pl-3 lg:p-0 text-label-14px-medium"
                                >
                                    Tokenomics
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://t.me/CypherBlockchain"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="block py-2 pr-4 pl-3 lg:p-0 text-label-14px-medium"
                                >
                                    Contact Us
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;
