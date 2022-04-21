import { FC, ReactNode } from "react";
import Head from "next/head";
import React from "react";
import Navbar from "../components/Navbar";


const MainLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div
      style={{
        backgroundColor: "#f5f5f5",
      }}
    >
      <Head>
        <title>Home page </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {children}
      </main>
    </div>
  );
};

export default MainLayout;
