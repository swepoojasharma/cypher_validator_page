export const phaseConfig = {
    1:  {
            "cost": "0.09",
            "usdCost": "291.75",
            "raise": "64,832.60",
            "totalSold": "200",
            "recovery": "1.01"
        },
    2:  {
            "cost": "0.10",
            "usdCost": "291.75",
            "raise": "64,832.60",
            "totalSold": "400",
            "recovery": "1.10"
        },
    3:  {
            "cost": "0.11",
            "usdCost": "291.75",
            "raise": "64,832.60",
            "totalSold": "600",
            "recovery": "1.21"
        },
    4:  {
            "cost": "0.12",
            "usdCost": "291.75",
            "raise": "64,832.60",
            "totalSold": "800",
            "recovery": "1.33"
        },
    5:  {
            "cost": "0.13",
            "usdCost": "291.75",
            "raise": "64,832.60",
            "totalSold": "1000",
            "recovery": "1.44"
        },
    6:  {
            "cost": "0.14",
            "usdCost": "291.75",
            "raise": "64,832.60",
            "totalSold": "1200",
            "recovery": "1.55"
        },
    7:  {
            "cost": "0.15",
            "usdCost": "291.75",
            "raise": "64,832.60",
            "totalSold": "1400",
            "recovery": "1.66"
        },
    8:  {
            "cost": "0.16",
            "usdCost": "291.75",
            "raise": "64,832.60",
            "totalSold": "1600",
            "recovery": "1.77"
        },
    9:  {
            "cost": "0.17",
            "usdCost": "291.75",
            "raise": "64,832.60",
            "totalSold": "1800",
            "recovery": "1.88"
    },
    10:  {
            "cost": "0.18",
            "usdCost": "291.75",
            "raise": "64,832.60",
            "totalSold": "2000",
            "recovery": "1.99"
    },
    11:  {
            "cost": "0.19",
            "usdCost": "291.75",
            "raise": "64,832.60",
            "totalSold": "2200",
            "recovery": "2.10"
    },
    12:  {
            "cost": "0.20",
            "usdCost": "291.75",
            "raise": "64,832.60",
            "totalSold": "2400",
            "recovery": "2.21"
    },
    13:  {
            "cost": "0.21",
            "usdCost": "291.75",
            "raise": "64,832.60",
            "totalSold": "2600",
            "recovery": "2.32"
    },
    14:  {
            "cost": "0.22",
            "usdCost": "291.75",
            "raise": "64,832.60",
            "totalSold": "2800",
            "recovery": "2.43"
    },
    15:  {
            "cost": "0.23",
            "usdCost": "291.75",
            "raise": "64,832.60",
            "totalSold": "3000",
            "recovery": "2.54"
    },
    16:  {
            "cost": "0.24",
            "usdCost": "291.75",
            "raise": "64,832.60",
            "totalSold": "3200",
            "recovery": "2.65"
    },
    17:  {
            "cost": "0.25",
            "usdCost": "291.75",
            "raise": "64,832.60",
            "totalSold": "3400",
            "recovery": "2.76"
    },
    18:  {
            "cost": "0.26",
            "usdCost": "291.75",
            "raise": "64,832.60",
            "totalSold": "3600",
            "recovery": "2.87"
    },
    19:  {
            "cost": "0.27",
            "usdCost": "291.75",
            "raise": "64,832.60",
            "totalSold": "3800",
            "recovery": "2.98"
    },
    20:  {
            "cost": "0.28",
            "usdCost": "291.75",
            "raise": "64,832.60",
            "totalSold": "4000",
            "recovery": "3.09"
    }
};

export const BLOCK_TIME_SECONDS = 1;
export const BLOCK_REWARD_CYP = 0.5;
export const BLOCK_SIZE_MB = 2;
export const CURRENT_PHASE = 1;
export const PHASE_CURRENCY = "ETH";
export const TESTNET_CYPHER_CREDITED = 400;
export const MAX_VALIDATORS = 4000;
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