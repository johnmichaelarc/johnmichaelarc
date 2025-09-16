import React, { useEffect } from "react";
import Head from "next/head";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    document.documentElement.lang = "en";
  }, []);

  return (
    <>
      <Head>
        <title>John Michael Aracosta</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index,follow" />
        <meta
          name="description"
          content="John Michael Aracosta is a Web Developer and founder from Naga City, Philippines."
        />
        <meta name="author" content="Evan Sims, John Michael Aracosta" />
        <link rel="canonical" href="https://johnmichaelarc.tech/" />
        <meta name="copyright" content="2022" />
        <meta name="url" content="https://johnmichaelarc.tech/" />
        <meta httpEquiv="imagetoolbar" content="no" />
        <meta httpEquiv="x-dns-prefetch-control" content="off" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Apply global classes to a layout div instead */}
      <div class="bg-gray-900 text-gray-400 font-sans leading-relaxed">
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
