import { NextUIProvider } from "@nextui-org/react";
import type { AppProps } from "next/app";

import "../styles/globals.scss";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider>
      <Component {...pageProps} />;
    </NextUIProvider>
  );
}
