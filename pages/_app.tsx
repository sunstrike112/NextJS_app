import "../styles/globals.css";
import type { AppProps } from "next/app";
import { EmptyLayout } from "@/components/layout";
import { AppPropsWithLayout } from "model";

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const Layout = Component.Layout ?? EmptyLayout;
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
