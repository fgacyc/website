import Header from "~/layouts/header";
import Footer from "~/layouts/footer";
import Head from "next/head";
import { type ReactNode } from "react";
import { GoogleTagManager } from "@next/third-parties/google";
import { env } from "~/env.mjs";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-w-screen relative">
      {/* Must render in the page tree. next/head never mounts children, so GTM would not load. */}
      <GoogleTagManager gtmId={env.NEXT_PUBLIC_GTM_ID} />
      <noscript>
        <iframe
          title="GTM noiframe"
          src={`https://www.googletagmanager.com/ns.html?id=${env.NEXT_PUBLIC_GTM_ID}`}
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        />
      </noscript>
      <Head>
        <link rel="icon" href="/CYC_Logo.jpg" />
        <meta property="og:title" content="FGA CYC" />
        <meta
          property="og:description"
          content="100 Strong Churches, 100,000 Disciples."
        />
        <meta
          property="og:image"
          content="https://www.fgacyc.com/CYC_Logo.jpg"
        />
        <meta property="og:url" content="https://www.fgacyc.com" />
        <meta property="og:type" content="website" />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
