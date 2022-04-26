
import Head from "next/head";


export default function MetaTags({ title, description }) {
    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta property="og:title" content={title} />
            <meta property="og:type" content="article" />
            <meta property="og:description" content={description} />
            <meta property="og:image" content="/img/avatar.png" />
            <meta property="og:color" content="#6366F1" />
            <meta name="twitter:card" content="summary" />
        </Head>
    )
}
