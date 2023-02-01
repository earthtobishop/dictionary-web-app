import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Navbar from '@/components/ui/navbar'

export default function Home() {
  return (
    <>
      <Head>
        <title>Dictionary Web App</title>
        <meta name='description' content='Search the dictionary' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={styles.main}>
        <Navbar />
      </main>
    </>
  )
}
