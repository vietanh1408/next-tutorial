import axiosClient from "../src/axios/axios-client";
import { SWRConfig } from "swr";
import { EmptyLayout } from "../src/components/layout";
import { AppPropsWithLayout } from "../src/models";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const Layout = Component.Layout ?? EmptyLayout;

  return (
    <SWRConfig
      value={{
        fetcher: (url) => axiosClient.get(url),
        shouldRetryOnError: false,
      }}
    >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SWRConfig>
  );
}

export default MyApp;
