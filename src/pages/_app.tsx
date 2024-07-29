import {type AppType} from "next/dist/shared/lib/utils";
import {NextUIProvider} from "@nextui-org/react";
import "~/styles/globals.css";
import Layout from "./components/layout";
import {UserProvider} from '@auth0/nextjs-auth0/client';

const MyApp: AppType = ({Component, pageProps}) => {
    return (
        <UserProvider>
            <NextUIProvider>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </NextUIProvider>
        </UserProvider>
    );
};

export default MyApp;
