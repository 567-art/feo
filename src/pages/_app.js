import "@/styles/globals.css";
import { spectral } from "@/fonts";

export default function App({ Component, pageProps }) {
  return (
    <div className={spectral.className}>
      <Component {...pageProps} />

    </div>
  )
}
