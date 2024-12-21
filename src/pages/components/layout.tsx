import Header from "~/layouts/header";
import Footer from "~/layouts/footer";
import Head from "next/head";
import { type ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-w-screen relative">
      {/* eslint-disable-next-line react/jsx-no-undef */}
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
