export const phaseConfig = {
    1:  {
            "count": "0-100",
            "cost": "0.7"
        },
    2:  {
            "count": "101-200",
            "cost": "0.9"
        },
    3:  {
            "count": "201-300",
            "cost": "1.1"
        },
    4:  {
            "count": "301-500",
            "cost": "1.5"
        },
    5:  {
            "count": "501-750",
            "cost": "1.7"
        },
    6:  {
            "count": "751-1000",
            "cost": "2"
        },
    7:  {
            "count": "1001-2000",
            "cost": "2000"
        }
};

export const BLOCK_TIME_SECONDS = 12;
export const BLOCK_REWARD_CYP = 0.4;
export const BLOCK_SIZE_MB = 2;
export const CURRENT_PHASE = 2;
export const PHASE_CURRENCY = "ETH";
export const MAX_VALIDATORS = 2000;
export const CURRENT_VALIDATORS = 1000;
export const BLOCKS_PER_MONTH = 216000;
export const BLOCK_REWARD_PER_MONTH = BLOCK_REWARD_CYP * BLOCKS_PER_MONTH;
export const BLOCK_REWARD_PER_MONTH_PER_VALIDATOR = BLOCK_REWARD_PER_MONTH / CURRENT_VALIDATORS;
export const CYP_BONUS_PER_MONTH_PER_VALIDATOR = 2000;
export const CYP_USD_PRICE = 1;
export const PROMO_CASHBACK_PERCENT = 5;

// Calculation
// Blocks Per Month - 216,000
// Reward per block - 0.4 CYP
// Block Reward per month = 216,000 * 0.4 CYP = 86400 CYP for 1000 validators
// Block Reward per month per validator = 86400 / 1000 = 86.4 CYP
// Bonus per month per validator  = 2000CYP
// Total Reward per month per validator = (Bonus + Reward) = 2000 + 86.4 CYP
// Total Reward for 5 months in CYP = (2000 + 86.4) * 5 = ?
// Total Reward for 5 months in USD will be same coz 1 CYP = 1$ for now

export const PROMO_CODES = {
    // noCode: "NOCODE",
    nodeOps: "NODEOPS2024",
    spheron: "SPHERON2024",
}
export const facilitatorList = [
    {
        value: "nodeOps",
        label: "NodeOps"
    },
    {
        value: "spheron",
        label: "Spheron Network"
    }
]
export const facilitatorUsdCost = {
    nodeOps: 35,
    spheron: 35,
}