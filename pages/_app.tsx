import axiosClient from "@/app/axios-client";
import { EmptyLayout } from "@/components/layout";
import { AppPropsWithLayout } from "@/models";
import { SWRConfig } from "swr";
import "antd/dist/antd.css";
import "../styles/globals.css";
import "../styles/custom.css";

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
