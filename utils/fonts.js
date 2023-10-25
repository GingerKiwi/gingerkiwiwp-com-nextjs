export const getTextAlign = (textAlign = "left") => {
    const textAlignMap = {
        left: "text-left",
        center: "text-center",
        right: "text-right"
    };
    return `${textAlignMap[textAlign] || ""}`
};

export const getFontSizeForHeading = (level) => {
    const fontSizeMap = {
        1: "text-2xl",
        2: "text-xl",
        3: "text-lg",
        4: "text-base",
        5: "text-sm",
        6: "text-xs"
    };
    return `${fontSizeMap[level] || ""}`
}