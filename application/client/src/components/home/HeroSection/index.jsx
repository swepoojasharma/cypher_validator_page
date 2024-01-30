import Spline from '@splinetool/react-spline';
import CountDown from './CountDown';
import RunValidatorForm from '../RunValidatorForm';

function HeroSection() {
    return (
        <div className="bg-black-100 relative px-[118px] pb-[80px]">
            <div className="flex">
                <div className="basis-2/5">
                    <h1 className="text-white-100 text-label-40px-semibold pt-[80px] pb-[32px]">Cypher Blockchain Validator Program</h1>
                    <p className="text-white-100 text-label-16px-regular pb-[48px]">
                        Welcome to the Cypher Blockchain Validator Program, an opportunity to become an integral part of our decentralized network. By
                        participating in this program, you contribute to the security, stability, and growth of the Cypher Blockchain. This document
                        outlines the key details and procedures for prospective validators.
                    </p>
                    <RunValidatorForm />
                </div>
                <div className="basis-3/5">
                    <Spline scene="https://prod.spline.design/tsddfSQuksUNy2vH/scene.splinecode" className="h-full w-full" />
                </div>
            </div>
            <CountDown />
        </div>
    );
}

export default HeroSection;
