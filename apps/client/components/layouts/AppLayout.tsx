import Head from "next/head"
import React, { PropsWithChildren } from "react"

export const Layout: React.FC<PropsWithChildren> = ({ children }) => {
    return (
        <>
            <Head>
                <title>Skaut Třebíč</title>
                <meta name="description" content="2. katolické oddíly Třebíč" />
                <link rel="icon" type="image/png" href="/skaut_logo.png" />

            </Head>
            <div>Menu</div>
            <main>{children}</main>
            <div>footer</div>
        </>
    )
}