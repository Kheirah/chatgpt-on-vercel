import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>ChatGPT</title>
        <meta name="description" content="ChatGPT" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <h2>ChatGPT</h2>
        <Link href="/chat">Go to Chat</Link>
        <Link href="/text-completion">Go to Completion</Link>
      </main>
    </>
  );
}
