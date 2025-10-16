import "@/styles/global.css";
import type { AppProps } from "next/app";
#export the default
export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
