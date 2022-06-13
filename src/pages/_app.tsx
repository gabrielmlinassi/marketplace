import type { AppProps } from "next/app";

import "../styles/globals.scss";
import Layout from "components/common/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className="pattern" />
      <div className="gradient-effect1" />
      <div className="gradient-effect2" />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
