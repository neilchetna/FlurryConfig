import React from "react";
import Header from "./Header";
import Head from "next/head";

export default function Layout({ children }) {
  return (
    <div className="h-screen">
      <Head>
        <title>Flurry Config</title>
      </Head>
      <main>
        <Header />
        <div className="flex justify-center items-center text-coolgray-50">
          {children}
        </div>
      </main>
    </div>
  );
}
