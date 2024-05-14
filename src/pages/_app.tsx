import { type AppType } from "next/dist/shared/lib/utils";
import { NextUIProvider } from "@nextui-org/react";
import "~/styles/globals.css";
import Layout from "./components/layout";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <NextUIProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </NextUIProvider>
  );
};

export default MyApp;
