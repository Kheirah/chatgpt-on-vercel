import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useChat } from "ai/react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { messages, handleSubmit, input, handleInputChange } = useChat();
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
        <div className={styles.description}>
          <form onSubmit={handleSubmit}>
            <label htmlFor="input">Prompt</label>
            <input
              name="prompt"
              value={input}
              onChange={handleInputChange}
              id="input"
            />
            <button type="submit">Submit</button>
            {messages.map((message, i) => (
              <div key={i}>{message.content}</div>
            ))}
          </form>
        </div>
      </main>
    </>
  );
}
