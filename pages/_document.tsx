import Document, {Html, Head, Main, NextScript, DocumentContext} from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const initialProps = await Document.getInitialProps(ctx);
        return {...initialProps};
    }

    render() {
        return (
            <Html className="has-navbar-fixed-top" lang="fr">
                <Head>
                    <meta name="title" content="La Boîte Jaune"/>
                    <meta name="description"
                          content="Application mobile pour rechercher des boîtes aux lettres en France"/>
                    <meta name="keywords" content="application,geolocalisation boite aux lettres,boite postale"/>
                </Head>
                <body>
                <Main/>
                <NextScript/>
                </body>
            </Html>
        )
    }
}

export default MyDocument
