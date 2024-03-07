export function convertStringWithEllipsis(str, noOfChar = 4) {
    const prefix = str.slice(0, noOfChar);
    const suffix = str.slice(-noOfChar);
    const ellipsis = "...";
    return `${prefix}${ellipsis}${suffix}`;
}

export function copyToClipboard(text, callback, resetCallback) {
    navigator.clipboard
        .writeText(text)
        .then(() => {
            if (callback) {
                callback();
            }
            setTimeout(() => {
                if (resetCallback) {
                    resetCallback();
                }
            }, 3000);
        })
        .catch((error) => {
            console.error(error);
        });
}

export function getPhaseBySlot(slot) {
    // Division by 200 because one phase consists of 200 slots
    return Math.floor(slot / 200) + 1;
}