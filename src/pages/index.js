import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Layout.module.css";
import Header from "@/components/layout_components/Header";
import Hero from "@/components/Hero";
import { FaBarsStaggered } from "react-icons/fa6"



export default function Home() {


  return (
    <>
      <Head>
        <title>FEO | feo sitesi tam, en kararlı, en güncel ve en kapsamlı sürümü</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/feoLogo-removebg-preview.png" />
      </Head>
      <div>
        <Header />
        <Hero />
      </div>

    </>
  );
}
