"use client";

import Head from "next/head";
import { Inter } from "next/font/google";
import { useCompletion } from "ai/react";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function SloganGenerator() {
  const { completion, input, handleInputChange, handleSubmit } =
    useCompletion();

  return (
    <>
      <Head>
        <title>ChatGPT</title>
        <meta name="description" content="ChatGPT" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <h1>Slogan Generator for Businesses</h1>
        <div className={styles.description}>
          <div className="mx-auto w-full max-w-md py-24 flex flex-col stretch">
            <form onSubmit={handleSubmit}>
              <input
                className="fixed w-full max-w-md bottom-0 border border-gray-300 rounded mb-8 shadow-xl p-2"
                value={input}
                placeholder="Describe your business..."
                onChange={handleInputChange}
              />
            </form>
            <div className="whitespace-pre-wrap my-6">{completion}</div>
          </div>
        </div>
      </main>
    </>
  );
}
