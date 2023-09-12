import "@/styles/globals.css";
import {NextUIProvider} from '@nextui-org/react'
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { fontSans, fontMono } from "@/config/fonts";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }) {
	return (
	  <NextUIProvider>
		<Component {...pageProps} />
	  </NextUIProvider>
	);
}
export default MyApp;

export const fonts = {
	sans: fontSans.style.fontFamily,
	mono: fontMono.style.fontFamily,
};
