import { type AppType } from "next/dist/shared/lib/utils";
// import { NextUIProvider } from "@nextui-org/react";
import "~/styles/globals.css";
import Layout from "./components/layout";
import { Auth0Provider } from "@auth0/nextjs-auth0/client";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    // <NextUIProvider>
    <Auth0Provider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Auth0Provider>
    // </NextUIProvider>
  );
};

export default MyApp;
