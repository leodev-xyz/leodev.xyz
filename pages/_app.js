
import React from "react";

import "../styles/globals.css";

export default function MyCustomApp({ Component, pageProps }) {
    return (
        <>
            <Component {...pageProps} />
        </>
    )
}

