import { NextPageContext } from "next";
import "../styles/globals.css";
import { Component, ReactElement, ReactNode } from "react";
import { AppProps } from "next/app";

type NextPageWithLayout = NextPageContext & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page) 
  return getLayout(<Component {...pageProps} />);
}

export default MyApp;
