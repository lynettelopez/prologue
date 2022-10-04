import { NextUIProvider, createTheme } from '@nextui-org/react';
import type { AppProps } from 'next/app';

import '../styles/globals.scss';

const lightTheme = createTheme({
  type: 'light',
  theme: {
    colors: {
      background: '#F8F9FA',
    },
  },
});

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider theme={lightTheme}>
      <Component {...pageProps} />
    </NextUIProvider>
  );
}
