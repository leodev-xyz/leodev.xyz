
import clsx from "clsx";
import React from "react";


export default function Skeleton({ as, className, count, overrideDisplay }) {
    const As = as || "span";
    const elements = [];
    for(let i = 0; i < (count || 1); i++) {
        elements.push(<As key={i} className={clsx(
            "skeleton",
            "bg-coolGray-400 bg-gradient-to-r from-coolGray-400 via-coolGray-300 to-coolGray-400 bg-no-repeat",
            overrideDisplay ? overrideDisplay : "inline-block w-full h-full",
            className
        )}>&zwnj;</As>);
    }
    return elements.length === 1 ? elements[0] : <span className="space-y-1">{elements}</span>;
}
