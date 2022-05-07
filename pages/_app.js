import Layout from "../comps/Layout"
import "../styles/globals.css"
import Script from "next/script"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1842241795685614"
        crossorigin="anonymous"
        strategy="beforeInteractive"></Script>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
