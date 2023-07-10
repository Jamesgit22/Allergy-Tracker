/* eslint-disable react/jsx-no-undef */
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";
import { api } from "~/utils/api";
import "~/styles/globals.css";
import Head from "next/head";
import Nav from "~/components/Nav";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <Head>
        <title>Allergy Tracker</title>
        <meta name="description" content="This is an allergy tracking tool." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <div className="background-bg flex">
        <div className="min-h-screen flex-grow ">
          <Component {...pageProps} />
        </div>
      </div>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
