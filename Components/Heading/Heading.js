import { getFontSizeForHeading } from "utils/fonts";
import React from "react";

export const Heading = ({ textAlign, content, level }) => {
    const tag = React.createElement(`h${level}`, {
        dangerouslySetInnerHTML: 
            {__html: content},
            className: `font-heading max-w-5xl mx-auto 
            ${getFontSizeForHeading(level)} 
            ${textAlign}`,
    });

    return tag;
        // This is an A11y issue - Headings should be headings not random divs. Is this fixed with the use of the utils functions?
};