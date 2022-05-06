import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {

    render() {
        const pageProps = this.props?.__NEXT_DATA__?.props?.pageProps;
        
        return (
            <Html>
                <Head />
                <body className={pageProps.bodyClass}>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument;