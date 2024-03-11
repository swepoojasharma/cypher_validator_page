export const validatorMessages = {
    labels: {},
    placeholders: {},
    messages: {
        validations: {
            promo_code: {
                error: {
                    validate_promo_code: "Invalid Code",
                },
            },
            node_count: {
                error: {
                    required: 'Please enter node count',
                    validate_node_count: "Current phase node count availability exceeded",
                },
            },
            cypher_address: {
                error: {
                    required: 'Please enter Cypher Address',
                    validate_cypher_address: "Invalid Cypher Address",
                },
            },
            balance: {
                error: {
                    insufficient: "Insufficient balance to deposit"
                }
            }
        },
    }
}