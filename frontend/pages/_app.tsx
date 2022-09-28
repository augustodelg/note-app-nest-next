import { ThemeProvider } from "@mui/material";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Fragment } from "react";
import { Toaster } from "react-hot-toast";
import Layout from "../components/layout/Layout";
import { theme } from "../config/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Head>
        <title>Home App</title>
      </Head>
      <ThemeProvider theme={theme}>
        <Toaster />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </Fragment>
  );
}

export default MyApp;
