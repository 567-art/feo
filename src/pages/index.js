import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Layout.module.css";
import Header from "@/components/layout_components/Header";
import Hero from "@/components/Hero";
import { FaBarsStaggered } from "react-icons/fa6"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export default function Home() {


  return (
    <>
      <Head>
        <title>FEO | feo sitesi tam, en kararlı, en güncel ve en kapsamlı sürümü</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Header />
        <Hero />
        <div className={styles.socialMediaBtn} id="div">
          <FaBarsStaggered />
        </div>
      </div>

    </>
  );
}
