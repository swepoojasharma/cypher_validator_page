export const validatorMessages = {
    walletAddress: {
        required: 'Wallet Address is required',
    },
    nodeCount: {
        required: 'Node Count is required',
    },
    cypherAddress: {
        required: 'Cypher Address is required',
        invalid: 'Invalid Cypher Address'
    },
    validator: {
        register: {
            success: 'Validator registered successfully',
            alreadyExists: 'Validator already exists'
        },
        found: {
            success: 'Validator found successfully',
            error: 'Validator not found'
        },
        referralCode: {
            valid: 'Referral Code is valid',
            invalid: 'Invalid Referral Code',
            cannotUseOwnCode: 'Cannot use your own referral code'
        }
    }
}